import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateProjectHealth, type BottleneckAlert } from './health.ts';

test('evaluateProjectHealth correctly assesses alerts and status', () => {
  const mockAlerts: BottleneckAlert[] = [
    {
      id: 'b-1',
      projectId: 'p-1',
      projectName: 'HQ Remodel SEQ',
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
      projectName: 'HQ Remodel SEQ',
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
  assert.equal(health.status, 'attention_needed');
  assert.ok(health.healthScore < 85);
});

