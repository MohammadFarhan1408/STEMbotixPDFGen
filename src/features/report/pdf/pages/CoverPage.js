import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { coverPageStyles } from '../styles/coverPageStyles';

export const CoverPage = async data => {
  const { projectTitle } = data?.projectOverview || {};

  const content = `
    ${coverPageStyles}

    <div class="cover-page__container">
      
      <!-- Optional Logos -->
      <!--
      <div class="cover-page__logos">
        <img src="STEMbotix-Logo.png" class="logo-right" />
        <img src="Haitian-Logo.jpg" class="logo-left" />
      </div>
      -->

      <div class="cover-page__main">
        <div class="cover-page__accent-bar"></div>

        <div class="cover-page__report-type">
          IMPACT ANALYSIS REPORT
        </div>

        <div class="cover-page__title">
          ${projectTitle || 'PROJECT TITLE'}
        </div>

        <div class="cover-page__subtitle">
          A comprehensive evaluation of outcomes, socio-economic impact,
          and institutional growth.
        </div>
      </div>

      <!-- Optional Footer Info -->
      <!--
      <div class="cover-page__footer">
        <div class="info-row">
          <div class="label">Implementing Organization:</div>
          <div class="value">STEMbotix</div>
        </div>
        <div class="info-row">
          <div class="label">Location:</div>
          <div class="value">Ahmedabad</div>
        </div>
        <div class="info-row">
          <div class="label">Duration:</div>
          <div class="value">2025 - 2026</div>
        </div>
      </div>
      -->
      
    </div>
  `;

  return await PDFPageLayout(content);
};
