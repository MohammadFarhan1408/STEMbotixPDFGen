import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';
import { summaryStyles } from '../styles/summaryStyles';

export const SummaryPage = async data => {
  const conclusion = data?.conclusion || {};

  const { summaryOfImpact, keyTakeaways, recommendations } = conclusion;

  const content = `
    ${summaryStyles}

      ${SectionTitle({ title: 'Summary' })}

    <div class="summary-container">

      <div class="summary-box">
        <div class="section-label">SUMMARY OF IMPACT</div>
        <div class="body-text">
          ${
            summaryOfImpact ||
            `The ISTEM Collective Foundation, with a proven track record of installing over 150 STEM labs and 5 AmRit Anganwadis, and training over 2,000 students and 500 teachers, has successfully implemented two transformative educational projects fully sponsored by Haitian Huayuan Machinery (India) Pvt Ltd. These initiatives included the establishment of AI and Robotics Labs and AmRit Anganwadi centers. Aligned with NEP 2020, the projects promote hands-on STEM education and interactive early childhood learning.`
          }
        </div>
      </div>

      <div class="takeaway-section">
        <div class="section-label">KEY TAKEAWAYS</div>
        <div class="takeaway-card">
          ${
            keyTakeaways ||
            `Strategic partnerships and hands-on technological integration are essential for modernizing rural education landscapes.`
          }
        </div>
      </div>

      <div class="recommendation-section">
        <div class="header-row">
          <div class="target-icon"></div>
          <div class="section-label">
            RECOMMENDATIONS FOR FUTURE PHASES
          </div>
        </div>

        <div class="recommendation-box">
          ${
            recommendations ||
            `Expanding digital infrastructure and continuous teacher training are recommended to maintain innovation momentum.`
          }
        </div>
      </div>

      <div class="sign-off">
        The ISTEM Collective Foundation remains committed to advancing STEM education and early childhood development in collaboration with valued partners.
      </div>

    </div>
  `;

  return await PDFPageLayout(content);
};
