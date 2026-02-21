import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { SectionTitle } from '@/pdf/components/SectionTitle';

import { SustainabilitySection } from '../sections/SustainabilitySection';
import { MonitoringSection } from '../sections/MonitoringSection';

export const SustainabilityAndMonitoringPage = async data => {
  const content = `
    ${SectionTitle('Sustainability & Scalability')}
    ${SustainabilitySection(data)}

    <div class="section-spacing"></div>

    ${SectionTitle('Monitoring & Evaluation Methodology')}
    ${MonitoringSection(data)}
  `;

  return await PDFPageLayout(content);
};
