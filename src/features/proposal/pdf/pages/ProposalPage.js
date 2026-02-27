import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { proposalPageStyles } from '../styles/proposalPageStyles';

export const ProposalPage = async data => {
  const { to, subject, description, date, salutation } = data?.proposal || {};

  const paragraphs = (description || '')
    .split('\n')
    .map(p => `<p class="proposal-page__body-text">${p}</p>`)
    .join('');

  const content = `
    ${proposalPageStyles}

    <div id="proposal" class="proposal-page">
      <!-- Date Section -->
      <div class="proposal-page__date-text">Date: ${date || '-'}</div>

      <!-- Recipient Section -->
      <div class="proposal-page__recipient-block">
        <div class="proposal-page__to-label">To,</div>
        <div class="proposal-page__to-value">${to || ''}</div>
      </div>

      <!-- Subject Section -->
      <div class="proposal-page__subject-box">
        <div class="proposal-page__subject-text">Subject: ${subject || ''}</div>
      </div>

      <!-- Content Section -->
      <div class="proposal-page__salutation">${salutation || ''},</div>

      ${paragraphs}
    </div>
  `;

  return await PDFPageLayout(content);
};
