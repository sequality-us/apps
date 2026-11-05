import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateOperationalSavings, evaluateProjectHealth, type BottleneckAlert } from './calculator.ts';

test('calculateOperationalSavings returns positive savings and valid ROI for commercial contractor', () => {
  const result = calculateOperationalSavings({
    activeProjects: 6,
    monthlyWorkOrders: 80,
    propertyType: 'commercial',
    avgHourlyCost: 45,
    includeMbeCompliance: true,
  });

  assert.ok(result.monthlyAdminHoursSaved > 50, 'Hours saved should be significant');
  assert.ok(result.monthlyFinancialSavingsUSD > 5000, 'Financial savings should be substantial');
  assert.ok(result.annualizedSavingsUSD === result.monthlyFinancialSavingsUSD * 12);
  assert.ok(result.roiMultiplier > 2, 'ROI should be greater than 2x');
  assert.equal(result.estimatedPlatformTier, 'Scale Pod');
});

test('calculateOperationalSavings handles smaller residential contractor', () => {
  const result = calculateOperationalSavings({
    activeProjects: 2,
    monthlyWorkOrders: 20,
    propertyType: 'residential',
    avgHourlyCost: 40,
    includeMbeCompliance: false,
  });

  assert.ok(result.monthlyAdminHoursSaved > 10);
  assert.equal(result.estimatedPlatformTier, 'Starter Pod');
  assert.equal(result.complianceHoursSaved, 0);
});

test('evaluateProjectHealth correctly assesses alerts and status', () => {
  const mockAlerts: BottleneckAlert[] = [
    {
      id: 'b-1',
      projectId: 'p-1',
      projectName: 'HQ Remodel ACG',
      trade: 'HVAC',
      category: 'supply',
      severity: 'critical',
      detectedTime: '10:45 AM',
      title: 'Retraso de Válvulas VAV',
      impactHours: 48,
      confidenceScore: 94,
      aiRecommendation: 'Reasignar proveedor secundario local en Atlanta',
      resolved: false,
    },
    {
      id: 'b-2',
      projectId: 'p-1',
      projectName: 'HQ Remodel ACG',
      trade: 'Eléctrico',
      category: 'inspection',
      severity: 'warning',
      detectedTime: '11:15 AM',
      title: 'Ventana de inspección municipal sin confirmar',
      impactHours: 16,
      confidenceScore: 89,
      aiRecommendation: 'Auto-solicitud de turno prioritario vía portal',
      resolved: false,
    },
  ];

  const health = evaluateProjectHealth(mockAlerts);
  assert.equal(health.criticalCount, 1);
  assert.equal(health.warningCount, 1);
  assert.equal(health.healthScore, 65);
  assert.equal(health.status, 'attention_needed');

  // Mark critical as resolved
  mockAlerts[0].resolved = true;
  const healthAfterResolve = evaluateProjectHealth(mockAlerts);
  assert.equal(healthAfterResolve.criticalCount, 0);
  assert.equal(healthAfterResolve.healthScore, 90);
  assert.equal(healthAfterResolve.status, 'attention_needed');
});
