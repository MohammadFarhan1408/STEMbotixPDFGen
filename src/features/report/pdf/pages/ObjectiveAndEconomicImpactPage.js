import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { SectionTitle } from '@/pdf/components/SectionTitle';

import { ObjectivesSection } from '../sections/ObjectivesSection';
import { EconomicSection } from '../sections/EconomicSection';

const isEmptyText = text => !text || text.trim() === '';

const isEmptyNumber = n =>
  n === '' || n === null || n === undefined || Number.isNaN(n);

const isEconomicImpactEmpty = e => {
  if (!e) return true;

  return (
    isEmptyText(e.employabilityEnhancement) &&
    isEmptyText(e.incomeOpportunities) &&
    isEmptyNumber(e.costPerBeneficiary) &&
    isEmptyNumber(e.roi)
  );
};

export const ObjectiveAndEconomicImpactPage = async data => {
  const hideEconomic = isEconomicImpactEmpty(data?.economicImpact);

  const content = `
    
    ${SectionTitle('Objectives & Intended Outcomes')}
    ${ObjectivesSection(data)}

    <div class="section-spacing"></div>

    ${
      !hideEconomic
        ? `
        ${SectionTitle('Economic Impact')}
        ${EconomicSection(data)}
      `
        : ''
    }

  `;

  return await PDFPageLayout(content);
};
