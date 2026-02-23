import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';

import { LearningSection } from '../sections/LearningSection';
import { InstitutionalSection } from '../sections/InstitutionalSection';

export const LearningAndInstitutionalImpactPage = async data => {
  const content = `
    
    ${SectionTitle({ title: 'Learning & Skill Outcomes' })}
    ${LearningSection(data)}
    
    <div class="section-spacing"></div>
    
    ${SectionTitle({ title: 'Institutional / Ecosystem Impact' })}
    ${InstitutionalSection(data)}

  `;

  return await PDFPageLayout(content);
};
