import { challengesStyles } from '../styles/challengesStyles';

const ChallengesSection = data => {
  const { keyChallenges, mitigationStrategies, lessonsLearned } =
    data?.challengesAndLearnings || {};

  return `
    ${challengesStyles}

    <div class="challenges__container">

      <div class="challenges__box">
        <div class="challenges__accent red"></div>
        <div class="challenges__label">KEY CHALLENGES</div>
        <div class="challenges__text">
          ${keyChallenges || 'No specific challenges recorded.'}
        </div>
      </div>

      <div class="challenges__box">
        <div class="challenges__accent blue"></div>
        <div class="challenges__label">MITIGATION STRATEGIES</div>
        <div class="challenges__text">
          ${mitigationStrategies || 'No mitigation strategies recorded.'}
        </div>
      </div>

      <div class="challenges__lessons">
        <div class="challenges__lessons-title">
          LESSONS LEARNED & FUTURE INSIGHTS
        </div>
        <div class="challenges__lessons-content">
          ${lessonsLearned || 'No lessons learned documented for this phase.'}
        </div>
      </div>

    </div>
  `;
};

export default ChallengesSection;
