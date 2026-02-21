import { sustainabilityStyles } from '../styles/sustainabilityStyles';

export const SustainabilitySection = data => {
  const sustainability = data?.sustainability || {};

  const { continuationPlan, scalabilityPotential, replicationPossibilities } =
    sustainability;

  return `
    ${sustainabilityStyles}

    <div class="s-container">

      <div class="s-card">
        <div class="s-header">
          <div class="indicator green"></div>
          <div class="s-label">POST-PROJECT CONTINUATION PLAN</div>
        </div>
        <div class="s-body">
          ${
            continuationPlan ||
            'A structured plan ensures institutional integration of lab activities into the regular curriculum for long-term impact.'
          }
        </div>
      </div>

      <div class="s-card">
        <div class="s-header">
          <div class="indicator blue"></div>
          <div class="s-label">SCALABILITY POTENTIAL</div>
        </div>
        <div class="s-body">
          ${
            scalabilityPotential ||
            'The modular AI and Robotics lab design enables expansion to additional grades and advanced modules.'
          }
        </div>
      </div>

      <div class="s-card no-margin">
        <div class="s-header">
          <div class="indicator purple"></div>
          <div class="s-label">REPLICATION POSSIBILITIES</div>
        </div>
        <div class="s-body">
          ${
            replicationPossibilities ||
            'The phygital model can be replicated across institutions to reduce the digital divide.'
          }
        </div>
      </div>

    </div>
  `;
};
