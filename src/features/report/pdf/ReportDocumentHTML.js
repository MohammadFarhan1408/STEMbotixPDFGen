import { CoverPage } from './pages/CoverPage';
import { TableOfContentsPage } from './pages/TableOfContentsPage';
import { SummaryPage } from './pages/SummaryPage';
import { ProjectPage } from './pages/ProjectPage';
import { BeneficiaryAndBaselinePage } from './pages/BeneficiaryAndBaselinePage';
import { QuantitativeAndQualitativeImpactPage } from './pages/QuantitativeAndQualitativeImpactPage';
import { LearningAndInstitutionalImpactPage } from './pages/LearningAndInstitutionalImpactPage';
import { SocialAndInnovationImpactPage } from './pages/SocialAndInnovationImpactPage';
import { CaseStudiesAndChallengesPage } from './pages/CaseStudiesAndChallengesPage';
import { SustainabilityAndMonitoringPage } from './pages/SustainabilityAndMonitoringPage';
import { PhotographsPage } from './pages/PhotographsPage';
import { BackPage } from './pages/BackPage';
import { ObjectiveAndEconomicImpactPage } from './pages/ObjectiveAndEconomicImpactPage';

import { commonStyles } from '@/pdf/styles/commonStyles';

const ReportDocumentHTML = async data => {
  const coverPageHTML = await CoverPage(data);
  const tableOfContentPageHTML = await TableOfContentsPage(data);
  const summaryPageHTML = await SummaryPage(data);
  const projectPageHTML = await ProjectPage(data);
  const objectiveAndEconomicImpactPageHTML =
    await ObjectiveAndEconomicImpactPage(data);
  const beneficiaryAndBaselinePageHTML = await BeneficiaryAndBaselinePage(data);
  const quantitativeAndQualitativeImpactPageHTML =
    await QuantitativeAndQualitativeImpactPage(data);
  const learningAndInstitutionalImpactPageHTML =
    await LearningAndInstitutionalImpactPage(data);
  const socialAndInnovationImpactPageHTML = await SocialAndInnovationImpactPage(
    data,
  );
  const caseStudiesAndChallengesPageHTML = await CaseStudiesAndChallengesPage(
    data,
  );
  const sustainabilityAndMonitoringPageHTML =
    await SustainabilityAndMonitoringPage(data);
  const photographsPageHTML = await PhotographsPage(data);
  const backPageHTML = await BackPage(data);

  return `
    <html>
      <head>
        ${commonStyles}
      </head>
      <body>
        ${coverPageHTML}
        ${tableOfContentPageHTML}
        ${summaryPageHTML}
        ${projectPageHTML}
        ${objectiveAndEconomicImpactPageHTML}
        ${beneficiaryAndBaselinePageHTML}
        ${quantitativeAndQualitativeImpactPageHTML}
        ${learningAndInstitutionalImpactPageHTML}
        ${socialAndInnovationImpactPageHTML}
        ${caseStudiesAndChallengesPageHTML}
        ${sustainabilityAndMonitoringPageHTML}
        ${photographsPageHTML}
        ${backPageHTML}
      </body>
    </html>
  `;
};

export default ReportDocumentHTML;
