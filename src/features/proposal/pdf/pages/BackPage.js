import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { backPageStyles } from '../styles/backPageStyles';

export const BackPage = async data => {
  const content = `
    ${backPageStyles}

    <div class="back-page__container">
      <!-- CENTER CONTENT -->
      <div class="back-page__center-content">
        <div class="back-page__thank-you">Thank You</div>

        <div class="back-page__message">
          We appreciate the opportunity to present this proposal.
          \n
          We look forward to collaborating and building an innovative future together.
        </div>
      </div>
    </div>
  `;

  return await PDFPageLayout(content);
};
