import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';

import CaseStudiesSection from '../sections/CaseStudiesSection';
import ChallengesSection from '../sections/ChallengesSection';

export const CaseStudiesAndChallengesPage = async data => {
  const content = `
    <div class="page-container">

      ${SectionTitle('Case Studies / Success Stories')}
      ${CaseStudiesSection(data)}

      <div class="section-spacing"></div>

      ${SectionTitle('Challenges & Learnings')}
      ${ChallengesSection(data)}

    </div>
  `;

  return await PDFPageLayout(content);
};
