import { monitorStyles } from '../styles/monitorStyles';

export const MonitoringSection = data => {
  const monitoring = data?.monitoringEvaluation || {};

  const { dataCollectionTools, assessmentMethods, monitoringFrequency } =
    monitoring;

  return `
    ${monitorStyles}

    <div class="method-grid">

      <div class="method-card">
        <div class="card-header">
          <div class="dot blue"></div>
          <div class="card-title">DATA COLLECTION TOOLS</div>
        </div>
        <div class="card-body">
          ${
            dataCollectionTools ||
            'Standardized surveys, digital logs, and observation checklists were utilized.'
          }
        </div>
      </div>

      <div class="method-card">
        <div class="card-header">
          <div class="dot purple"></div>
          <div class="card-title">ASSESSMENT METHODS</div>
        </div>
        <div class="card-body">
          ${
            assessmentMethods ||
            'Impact measured through baseline-endline comparisons and practical skill evaluations.'
          }
        </div>
      </div>

    </div>

    <div class="frequency-box">
      <div class="frequency-label">MONITORING FREQUENCY</div>
      <div class="frequency-value">
        ${
          monitoringFrequency ||
          'Periodic assessments conducted throughout the project duration.'
        }
      </div>
    </div>
  `;
};
