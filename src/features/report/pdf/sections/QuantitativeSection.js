import { quantitativeImpactStyles } from '../styles/quantitativeStyles';

export const QuantitativeImpactSection = data => {
  const {
    participantsTrained,
    attendanceRate,
    completionRate,
    certificationsAchieved,
    assessmentImprovement,
  } = data?.quantitativeImpact || {};

  return `
    ${quantitativeImpactStyles}

    <div class="quant-container">

      <div class="hero-row">
        <div class="hero-box">
          <div class="hero-label">PARTICIPANTS TRAINED</div>
          <div class="hero-value">${participantsTrained || 0}</div>
        </div>

        <div class="hero-box blue-hero">
          <div class="hero-label light">CERTIFICATIONS ACHIEVED</div>
          <div class="hero-value light">
            ${certificationsAchieved || 0}
          </div>
        </div>
      </div>

      <div class="kpi-section">
        ${metricBar(
          'Attendance / Retention Rate',
          attendanceRate || 0,
          '#f59e0b',
        )}

        ${metricBar('Completion Rate', completionRate || 0, '#10b981')}

        ${metricBar(
          'Improvement in Assessment Scores',
          assessmentImprovement || 0,
          '#8b5cf6',
          true,
        )}
      </div>

    </div>
  `;
};

const metricBar = (label, value, color, prefix = false) => `
  <div class="metric-item">
    <div class="metric-header">
      <div class="metric-name">${label}</div>
      <div class="metric-percent">
        ${prefix ? '+' : ''}${value}%
      </div>
    </div>
    <div class="progress-bg">
      <div 
        class="progress-fill"
        style="width:${value}%; background:${color};"
      ></div>
    </div>
  </div>
`;
