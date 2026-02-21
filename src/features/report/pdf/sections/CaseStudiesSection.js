import { caseStudyStyles } from '../styles/caseStudyStyles';

const CaseStudiesSection = data => {
  const {
    beneficiaryBackground,
    interventionDetails,
    outcomeAchieved,
    testimonial,
  } = data?.caseStudy || {};

  return `
    ${caseStudyStyles}

    <div class="case-study__container">

      <div class="case-study__block">
        <div class="case-study__header">BENEFICIARY BACKGROUND</div>
        <div class="case-study__text">
          ${beneficiaryBackground || 'No background data provided.'}
        </div>
      </div>

      <div class="case-study__block">
        <div class="case-study__header">INTERVENTION DETAILS</div>
        <div class="case-study__text">
          ${interventionDetails || 'No intervention details provided.'}
        </div>
      </div>

      <div class="case-study__block">
        <div class="case-study__header">OUTCOME ACHIEVED</div>
        <div class="case-study__outcome">
          ${outcomeAchieved || 'No outcome details provided.'}
        </div>
      </div>

      <div class="case-study__testimonial">
        <div class="quote-start">“</div>
        <div class="case-study__testimonial-text">
          ${
            testimonial ||
            'The impact of this program has been life-changing for our community.'
          }
        </div>
        <div class="quote-end">”</div>
      </div>

    </div>
  `;
};

export default CaseStudiesSection;
