import { economicStyles } from '../styles/economicStyles';

export const EconomicSection = data => {
  const {
    employabilityEnhancement,
    incomeOpportunities,
    costPerBeneficiary,
    roi,
  } = data?.economicImpact || {};

  return `
    ${economicStyles}

    <div class="metrics-row">
      <div class="metric-card">
        <div class="metric-label">COST PER BENEFICIARY</div>
        <div class="metric-value">
          ${Number(costPerBeneficiary || 0).toLocaleString()}
        </div>
      </div>

      <div class="metric-card" style="background:#f0fdf4; border-color:#bcf0da;">
        <div class="metric-label" style="color:#166534;">
          RETURN ON INVESTMENT (ROI)
        </div>
        <div class="metric-value" style="color:#15803d;">
          ${roi || 0}%
        </div>
      </div>
    </div>

    <div class="info-block">
      <div class="icon-header">
        <div class="bullet"></div>
        <div class="block-title">EMPLOYABILITY ENHANCEMENT</div>
      </div>
      <div class="text-area">
        ${
          employabilityEnhancement ||
          'No employability data recorded for this period.'
        }
      </div>
    </div>

    <div class="info-block">
      <div class="icon-header">
        <div class="bullet" style="background:#10b981;"></div>
        <div class="block-title">INCOME GENERATION OPPORTUNITIES</div>
      </div>
      <div class="text-area">
        ${incomeOpportunities || 'No specific income opportunities documented.'}
      </div>
    </div>
  `;
};
