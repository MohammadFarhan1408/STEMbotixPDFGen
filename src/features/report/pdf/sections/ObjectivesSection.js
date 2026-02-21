import { objectiveStyles } from '../styles/objectiveStyles';

export const ObjectivesSection = data => {
  const {
    primaryObjectives,
    secondaryObjectives,
    shortTermOutcomes,
    longTermOutcomes,
    sdgAlignment,
  } = data?.objectives || {};

  return `
    ${objectiveStyles}

    <div class="goal-row">
      <div class="goal-card">
        <div class="card-label">PRIMARY OBJECTIVES</div>
        <div class="card-text">
          ${
            primaryObjectives ||
            'To provide hands-on STEM education and prepare students for technological careers.'
          }
        </div>
      </div>

      <div class="goal-card" style="background:#f8fafc;">
        <div class="card-label">SECONDARY OBJECTIVES</div>
        <div class="card-text">
          ${
            secondaryObjectives ||
            'To foster innovation and collaboration within the ecosystem.'
          }
        </div>
      </div>
    </div>

    <div class="timeline-section">
      <div class="timeline-header">INTENDED OUTCOMES</div>

      <div class="outcome-row">
        <div class="outcome-icon">S</div>
        <div class="outcome-content">
          <div class="outcome-label">SHORT-TERM OUTCOMES</div>
          <div class="body-text">
            ${
              shortTermOutcomes ||
              'Immediate engagement with robotics kits and foundational AI concepts.'
            }
          </div>
        </div>
      </div>

      <div class="outcome-row">
        <div class="outcome-icon" style="background:#10b981;">L</div>
        <div class="outcome-content">
          <div class="outcome-label">LONG-TERM OUTCOMES</div>
          <div class="body-text">
            ${
              longTermOutcomes ||
              'Enhanced employability and sustained interest in technology careers.'
            }
          </div>
        </div>
      </div>
    </div>

    <div class="alignment-box">
      <div class="alignment-label">
        ALIGNMENT WITH SDGs / NATIONAL PRIORITIES
      </div>
      <div class="alignment-text">
        ${
          sdgAlignment ||
          'Aligned with national education priorities focusing on experiential learning.'
        }
      </div>
    </div>
  `;
};
