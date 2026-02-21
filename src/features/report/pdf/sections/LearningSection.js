import { learningStyles } from '../styles/learningStyles';

export const LearningSection = data => {
  const {
    technicalSkillsGained,
    softSkillsDeveloped,
    toolsPlatformsUsed,
    handsOnLearningHours,
  } = data?.learningOutcomes || {};

  return `
    ${learningStyles}

    <div class="hero-metric">
      <div class="hero-label">TOTAL HANDS-ON LEARNING HOURS</div>
      <div class="hero-value">${handsOnLearningHours || 0}h+</div>
      <div class="hero-subtext">
        Practical Experience in STEM & Innovation
      </div>
    </div>

    <div class="skill-grid">
      <div class="skill-card orange-accent">
        <div class="skill-title" style="color:#fdba74;">
          TOOLS & PLATFORMS UTILIZED
        </div>
        <div class="skill-body">
          ${
            toolsPlatformsUsed ||
            'Various industry-standard tools and digital platforms were integrated into the training.'
          }
        </div>
      </div>
    </div>

    <div class="skill-grid">
      <div class="skill-card blue-accent">
        <div class="skill-title">
          TECHNICAL SKILLS GAINED
        </div>
        <div class="skill-body">
          ${
            technicalSkillsGained ||
            'Specific technical competencies developed through interactive modules.'
          }
        </div>
      </div>

      <div class="skill-card green-accent">
        <div class="skill-title" style="color:#059669;">
          SOFT SKILLS DEVELOPED
        </div>
        <div class="skill-body">
          ${
            softSkillsDeveloped ||
            'Participants enhanced communication, leadership, and collaboration skills.'
          }
        </div>
      </div>
    </div>
  `;
};
