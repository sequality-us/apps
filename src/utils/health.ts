/**
 * Project health and bottleneck assessment for By SEQ
 */

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

