import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { backPageStyles } from '../styles/backPageStyles';

export const BackPage = async () => {
  const content = `
    ${backPageStyles}

    <div class="back-page__container">
      <div class="back-page__content">
        <div class="back-page__thank-you">
          Thank you for your partnership in driving impact.
        </div>

        <div class="back-page__divider"></div>

        <div class="back-page__note">
          This report was generated to summarize the progress and outcomes of
          our joint initiatives. For further inquiries regarding the data or
          future collaborations, please reach out to us.
        </div>
      </div>
    </div>
  `;

  return await PDFPageLayout(content);
};
