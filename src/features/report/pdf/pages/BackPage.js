import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { backPageStyles } from '../styles/backPageStyles';

export const BackPage = async () => {
  const currentYear = new Date().getFullYear();

  const content = `
    ${backPageStyles}

    <div class="back-page__container">

      <div class="back-page__top-accent"></div>

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

      <!-- Optional Footer -->
      <!--
      <div class="back-page__footer">

        <div class="back-page__contact">
          <div class="contact-heading">GET IN TOUCH</div>
          <div class="contact-link">www.stembotix.com</div>
          <div class="contact-link">info@stembotix.com</div>
        </div>

        <div class="back-page__logo-section">
          <img src="STEMbotix-Logo.png" class="footer-logo" />
          <div class="copyright">
            © ${currentYear} STEMbotix. All rights reserved.
          </div>
        </div>

      </div>
      -->

    </div>
  `;

  return await PDFPageLayout(content);
};
