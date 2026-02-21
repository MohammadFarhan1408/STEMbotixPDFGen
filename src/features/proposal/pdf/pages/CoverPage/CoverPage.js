import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { coverPageStyles } from './styles';

export const CoverPage = async data => {
  const { to, subject, date } = data?.proposal || {};

  const content = `
    ${coverPageStyles}

    <div class="cover-page__container">
      <div class="cover-page__top">
        <div class="cover-page__company">STEMbotix</div>
        <div class="cover-page__title">Project Proposal</div>
        <div class="cover-page__subtitle">
          Empowering the Next Generation of Innovators
        </div>
      </div>

      <div class="cover-page__details">
        <div class="cover-page__info">
          <div class="cover-page__label">Prepared For</div>
          <div class="cover-page__value">${to || 'Valued Institution'}</div>
        </div>

        <div class="cover-page__info">
          <div class="cover-page__label">Subject</div>
          <div class="cover-page__value">
            ${subject || 'STEM Lab Setup & Implementation'}
          </div>
        </div>

        <div class="cover-page__info">
          <div class="cover-page__label">Date</div>
          <div class="cover-page__value">${date || '-'}</div>
        </div>
      </div>
    </div>
  `;

  return await PDFPageLayout(content);
};
