import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { SectionTitle } from '@/pdf/components/SectionTitle';

import { SocialSection } from '../sections/SocialSection';
import { InnovationSection } from '../sections/InnovationSection';

export const SocialAndInnovationImpactPage = async data => {
  const content = `
    ${SectionTitle('Social Impact')}
    ${SocialSection(data)}

    <div class="section-spacing"></div>

    ${SectionTitle('Innovation & Technology Impact')}
    ${InnovationSection(data)}
  `;

  return await PDFPageLayout(content);
};
