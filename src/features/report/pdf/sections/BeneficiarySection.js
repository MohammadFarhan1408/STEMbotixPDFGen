import { beneficiaryStyles } from '../styles/beneficiaryStyles';

export const BeneficiarySection = data => {
  const profile = data?.beneficiaryProfile || {};
  const {
    totalBeneficiaries = 0,
    ageGroup = '',
    educationBackground = '',
    genderDistribution = {},
    geographicCoverage = '',
    socioEconomicBackground = '',
  } = profile;

  const genderBars = Object.entries(genderDistribution)
    .map(([label, value]) => {
      const colors = {
        female: '#ec4899',
        male: '#3b82f6',
        other: '#94a3b8',
      };
      const color = colors[label.toLowerCase()] || colors.other;

      return `
        <div class="gender-bar">
          <div class="gender-bar-header">
            <span>${label.toUpperCase()}</span>
            <span>${value}%</span>
          </div>
          <div class="gender-bar-bg">
            <div class="gender-bar-fill" style="width:${value}%; background:${color};"></div>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    ${beneficiaryStyles}

    <div class="stats-row">
      <div class="main-stat">
        <div class="stat-label">TOTAL BENEFICIARIES</div>
        <div class="stat-value">${totalBeneficiaries}</div>
        <div class="stat-sub">(Direct & Indirect Impact)</div>
      </div>

      <div class="side-stat">
        <div class="stat-label">PRIMARY AGE GROUP</div>
        <div class="stat-value-small">${ageGroup}</div>
      </div>
    </div>

    <div class="grid">
      <div class="column">
        <div class="card">
          <div class="card-title">GENDER DISTRIBUTION</div>
          ${genderBars}
        </div>

        <div class="card margin-top">
          <div class="card-title">EDUCATIONAL BACKGROUND</div>
          <div class="body-text">${educationBackground}</div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-title">SOCIO-ECONOMIC PROFILE</div>
          <div class="body-text">${socioEconomicBackground}</div>
        </div>

        <div class="card margin-top blue-bg">
          <div class="card-title">GEOGRAPHIC COVERAGE</div>
          <div class="body-text blue-text">${geographicCoverage}</div>
        </div>
      </div>
    </div>
  `;
};
