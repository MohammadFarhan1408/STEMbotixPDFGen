import { institutionalStyles } from '../styles/institutionalStyles';

export const InstitutionalSection = data => {
  const {
    teacherCapacityBuilding,
    infrastructureUse,
    curriculumEnhancement,
    sustainabilityMeasures,
  } = data?.institutionalImpact || {};

  return `
    ${institutionalStyles}

    <div class="impact-card">
      <div class="card-header">
        CAPACITY BUILDING OF TEACHERS/STAFF
      </div>
      <div class="card-body">
        ${
          teacherCapacityBuilding ||
          'No specific data on staff training recorded.'
        }
      </div>
    </div>

    <div class="impact-card">
      <div class="card-header">
        INFRASTRUCTURE UTILIZATION
      </div>
      <div class="card-body">
        ${infrastructureUse || 'No infrastructure usage data documented.'}
      </div>
    </div>

    <div class="impact-card">
      <div class="card-header">
        CURRICULUM ENHANCEMENT
      </div>
      <div class="card-body">
        ${
          curriculumEnhancement ||
          'No curriculum updates recorded for this phase.'
        }
      </div>
    </div>

    <div class="impact-card sustainability">
      <div class="card-header" style="color:#166534;">
        SUSTAINABILITY MEASURES
      </div>
      <div class="separator"></div>
      <div class="card-body" style="color:#14532d;">
        ${
          sustainabilityMeasures ||
          'No long-term sustainability plans documented.'
        }
      </div>
    </div>
  `;
};
