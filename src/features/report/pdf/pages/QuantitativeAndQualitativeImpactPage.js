import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { QualitativeImpactSection } from '../sections/QualitativeSection';
import { QuantitativeImpactSection } from '../sections/QuantitativeSection';

export const QuantitativeAndQualitativeImpactPage = async data => {
  const content = `
    ${QualitativeImpactSection(data)}
    <div style="section-spacing"></div>
    ${QuantitativeImpactSection(data)}
  `;

  return await PDFPageLayout(content);
};
