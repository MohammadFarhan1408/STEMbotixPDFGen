import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';
import { projectProposalStyles } from '../styles/projectProposalStyles';

export const ProjectProposalPage = async data => {
  const { title, intro, objectives, provision } = data?.projectProposal || {};

  const objectivesHtml = (objectives || [])
    .map(
      obj => `
      <div class="project-page__objective-card">
        <div class="project-page__obj-title">${obj.name || ''}</div>
        <div class="project-page__obj-desc">${obj.description || ''}</div>
      </div>
    `,
    )
    .join('');

  const provisionHtml = (provision || [])
    .map(
      (item, i) => `
      <div class="project-page__service-item">
        <div class="project-page__service-header">
          ${i + 1}. ${item.title || ''}
        </div>
        <div class="project-page__service-body">
          ${item.content || ''}
        </div>
      </div>
    `,
    )
    .join('');

  const content = `
    ${projectProposalStyles}

    <div id="project-proposal" class="project-page">
      ${SectionTitle({ title: 'Project Proposal' })}

      <div class="project-page__header-section">
        <div class="project-page__main-title">${title || ''}</div>
        <div class="project-page__intro-text">${intro || ''}</div>
      </div>

      <div class="project-page__section-heading">Key Objectives</div>
      <div class="project-page__objective-grid">
        ${objectivesHtml}
      </div>

      <div class="project-page__section-heading">What STEMbotix Provides</div>
      ${provisionHtml}
    </div>
  `;

  return await PDFPageLayout(content);
};
