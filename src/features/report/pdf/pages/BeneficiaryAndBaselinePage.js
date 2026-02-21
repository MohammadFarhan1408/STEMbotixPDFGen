import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { SectionTitle } from '@/pdf/components/SectionTitle';

import { BeneficiarySection } from '../sections/BeneficiarySection';
import { BaselineEndlineSection } from '../sections/BaselineEndlineSection';

export const BeneficiaryAndBaselinePage = async data => {
  const content = `

      ${SectionTitle('Beneficiary Profile')}
      ${BeneficiarySection(data)}

      <div class="section-spacing"></div>

      ${SectionTitle('Baseline vs Endline')}
      ${BaselineEndlineSection(data)}

  `;

  return await PDFPageLayout(content);
};
