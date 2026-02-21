import { innovationStyles } from '../styles/innovationStyles';

export const InnovationSection = data => {
  const innovation = data?.innovationImpact || {};

  const { newTechnologies, innovationProjects, research } = innovation;

  return `
    ${innovationStyles}

    <div class="tech-section">
      <div class="section-title">NEW TECHNOLOGIES ADOPTED</div>
      <div class="card">
        ${newTechnologies || 'No new technology adoption data recorded.'}
      </div>
    </div>

    <div class="tech-section">
      <div class="section-title">INNOVATION PROJECTS DEVELOPED</div>
      <div class="card">
        ${innovationProjects || 'No specific innovation projects documented.'}
      </div>
    </div>

    <div class="tech-section">
      <div class="section-title">RESEARCH & IP OUTCOMES</div>
      <div class="research-card">
        ${
          research ||
          'No research or intellectual property outcomes recorded for this phase.'
        }
      </div>
    </div>
  `;
};
