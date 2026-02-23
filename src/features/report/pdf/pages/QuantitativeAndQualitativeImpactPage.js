import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';

import { QualitativeImpactSection } from '../sections/QualitativeSection';
import { QuantitativeImpactSection } from '../sections/QuantitativeSection';

export const QuantitativeAndQualitativeImpactPage = async data => {
  const content = `
    ${SectionTitle({ title: 'Qualitative Impact & Behavioral Change' })}
    ${QualitativeImpactSection(data)}
    
    <div class="section-spacing"></div>
    
    ${SectionTitle({ title: 'Quantitative Impact' })}
    ${QuantitativeImpactSection(data)}
  `;

  return await PDFPageLayout(content);
};
