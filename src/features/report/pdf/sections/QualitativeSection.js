import { qualitativeImpactStyles } from '../styles/qualitativeStyles';

export const QualitativeImpactSection = data => {
  const {
    confidenceImprovement,
    leadershipSkills,
    teamwork,
    criticalThinking,
    testimonials,
  } = data?.qualitativeImpact || {};

  return `
    ${qualitativeImpactStyles}

    <div class="qual-grid">

      <div class="qual-row">
        <div class="qual-card">
          <div class="indicator orange"></div>
          <div class="card-label">CONFIDENCE IMPROVEMENT</div>
          <div class="card-body">
            ${confidenceImprovement}
          </div>
        </div>

        <div class="qual-card">
          <div class="indicator blue"></div>
          <div class="card-label">TEAMWORK & COLLABORATION</div>
          <div class="card-body">
            ${teamwork}
          </div>
        </div>
      </div>

      <div class="qual-row">
        <div class="qual-card">
          <div class="indicator green"></div>
          <div class="card-label">CRITICAL THINKING</div>
          <div class="card-body">
            ${criticalThinking}
          </div>
        </div>

        <div class="qual-card">
          <div class="indicator purple"></div>
          <div class="card-label">LEADERSHIP SKILLS</div>
          <div class="card-body">
            ${leadershipSkills}
          </div>
        </div>
      </div>

    </div>

    <div class="feedback-box">
      <div class="feedback-title">Feedback</div>
      <div class="feedback-text">
        ${
          testimonials ||
          'Participants expressed strong satisfaction and measurable growth.'
        }
      </div>
    </div>
  `;
};
