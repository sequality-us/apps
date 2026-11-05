/**
 * Core business logic and calculations for ConstrucPod AI
 * Tailored for contractors and facility service providers like Advance Contractor Group (ACG)
 */

export interface CostCalculatorInputs {
  activeProjects: number;
  monthlyWorkOrders: number;
  propertyType: 'commercial' | 'residential' | 'mixed';
  avgHourlyCost: number; // in USD
  includeMbeCompliance: boolean;
}

export interface CostCalculatorResults {
  monthlyAdminHoursSaved: number;
  monthlyBottlenecksPrevented: number;
  monthlyFinancialSavingsUSD: number;
  annualizedSavingsUSD: number;
  estimatedSlaImprovementPct: number;
  complianceHoursSaved: number;
  estimatedPlatformTier: 'Starter Pod' | 'Scale Pod' | 'Enterprise Pod';
  roiMultiplier: number;
}

export function calculateOperationalSavings(inputs: CostCalculatorInputs): CostCalculatorResults {
  const {
    activeProjects,
    monthlyWorkOrders,
    propertyType,
    avgHourlyCost,
    includeMbeCompliance
  } = inputs;

  // Factor based on property complexity
  const complexityFactor = propertyType === 'commercial' ? 1.35 : propertyType === 'mixed' ? 1.2 : 1.0;

  // Field reporting & daily logs hours saved per site: ~22 hours/month
  const fieldReportingHoursSaved = activeProjects * 22 * complexityFactor;

  // Work order dispatch & facility management triage: ~0.4 hours saved per work order
  const workOrderHoursSaved = monthlyWorkOrders * 0.45;

  // MBE certification & certified payroll / compliance reporting savings
  const complianceHoursSaved = includeMbeCompliance ? Math.min(60, 14 + activeProjects * 3.5) : 0;

  const totalMonthlyHoursSaved = Math.round(fieldReportingHoursSaved + workOrderHoursSaved + complianceHoursSaved);

  // Bottlenecks prevented (procurement, trade conflicts, permit delays)
  const bottlenecksPrevented = Math.max(1, Math.round(activeProjects * 1.8 * complexityFactor));

  // Delay mitigation cost savings: estimated prevented downtime / subcontractor penalty ($1,200 per critical bottleneck averted)
  const delayMitigationSavings = bottlenecksPrevented * 850;

  // Direct labor savings
  const directLaborSavings = totalMonthlyHoursSaved * avgHourlyCost;

  const monthlyFinancialSavingsUSD = Math.round(directLaborSavings + delayMitigationSavings);
  const annualizedSavingsUSD = monthlyFinancialSavingsUSD * 12;

  // SLA improvement calculation: from baseline response
  const baseSlaImprovement = propertyType === 'commercial' ? 48 : 42;
  const estimatedSlaImprovementPct = Math.min(75, Math.round(baseSlaImprovement + (monthlyWorkOrders > 100 ? 12 : 5)));

  // Tier determination
  let estimatedPlatformTier: 'Starter Pod' | 'Scale Pod' | 'Enterprise Pod' = 'Starter Pod';
  let estimatedTierCostMonthly = 490;

  if (activeProjects > 15 || monthlyWorkOrders > 250) {
    estimatedPlatformTier = 'Enterprise Pod';
    estimatedTierCostMonthly = 2490;
  } else if (activeProjects > 4 || monthlyWorkOrders > 50) {
    estimatedPlatformTier = 'Scale Pod';
    estimatedTierCostMonthly = 990;
  }

  const roiMultiplier = Number((monthlyFinancialSavingsUSD / estimatedTierCostMonthly).toFixed(1));

  return {
    monthlyAdminHoursSaved: totalMonthlyHoursSaved,
    monthlyBottlenecksPrevented: bottlenecksPrevented,
    monthlyFinancialSavingsUSD,
    annualizedSavingsUSD,
    estimatedSlaImprovementPct,
    complianceHoursSaved: Math.round(complianceHoursSaved),
    estimatedPlatformTier,
    roiMultiplier: Math.max(1.5, roiMultiplier),
  };
}

export interface BottleneckAlert {
  id: string;
  projectId: string;
  projectName: string;
  trade: string;
  category: 'supply' | 'inspection' | 'labor' | 'safety';
  severity: 'critical' | 'warning' | 'info';
  detectedTime: string;
  title: string;
  impactHours: number;
  confidenceScore: number;
  aiRecommendation: string;
  resolved: boolean;
}

export function evaluateProjectHealth(alerts: BottleneckAlert[]): {
  criticalCount: number;
  warningCount: number;
  healthScore: number;
  status: 'optimal' | 'attention_needed' | 'at_risk';
} {
  const unresolved = alerts.filter(a => !a.resolved);
  const criticalCount = unresolved.filter(a => a.severity === 'critical').length;
  const warningCount = unresolved.filter(a => a.severity === 'warning').length;

  let deduction = criticalCount * 25 + warningCount * 10;
  const healthScore = Math.max(15, 100 - deduction);

  let status: 'optimal' | 'attention_needed' | 'at_risk' = 'optimal';
  if (healthScore < 60 || criticalCount >= 2) {
    status = 'at_risk';
  } else if (healthScore < 85 || warningCount > 0) {
    status = 'attention_needed';
  }

  return {
    criticalCount,
    warningCount,
    healthScore,
    status,
  };
}
