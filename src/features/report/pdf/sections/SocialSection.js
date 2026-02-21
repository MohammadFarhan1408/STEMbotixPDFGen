import { socialStyles } from '../styles/socialStyles';

export const SocialSection = data => {
  const social = data?.socialImpact || {};

  const {
    inclusionAndEquity,
    communityEngagement,
    awarenessPrograms,
    digitalDivideReduction,
  } = social;

  return `
    ${socialStyles}

    <div class="impact-section">
      <div class="header-row">
        <div class="circle purple"></div>
        <div class="section-header">INCLUSION & EQUITY IMPACT</div>
      </div>

      <div class="content-box">
        ${
          inclusionAndEquity ||
          'Ensuring equal access to STEM resources for all students regardless of gender or socio-economic background.'
        }
      </div>
    </div>

    <div class="impact-section">
      <div class="header-row">
        <div class="circle blue"></div>
        <div class="section-header">DIGITAL DIVIDE REDUCTION</div>
      </div>

      <div class="content-box blue-bg">
        ${
          digitalDivideReduction ||
          'Providing rural educational centers with the same high-tech tools found in urban private schools.'
        }
      </div>
    </div>

    <div class="split-row">
      <div class="split-card">
        <div class="split-header">COMMUNITY ENGAGEMENT</div>
        <div class="small-body">
          ${
            communityEngagement ||
            'Involvement of local stakeholders and parents in project inauguration and student showcases.'
          }
        </div>
      </div>

      <div class="split-card">
        <div class="split-header">AWARENESS GENERATION</div>
        <div class="small-body">
          ${
            awarenessPrograms ||
            'Promoting the importance of STEM education and early childhood learning (NEP 2020) within the region.'
          }
        </div>
      </div>
    </div>
  `;
};
