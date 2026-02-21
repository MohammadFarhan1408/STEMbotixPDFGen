import { AboutStembotixPage } from './pages/AboutStembotixPage/AboutStembotixPage';
import { BackPage } from './pages/BackPage/BackPage';
import { CoverPage } from './pages/CoverPage/CoverPage';
import { FinancialProposalPage } from './pages/FinancialProposalPage/FinancialProposalPage';
import { GalleryPage } from './pages/GalleryPage/GalleryPage';
import { ProjectProposalPage } from './pages/ProjectProposalPage/ProjectProposalPage';
import { ProposalPage } from './pages/ProposalPage/ProposalPage';
import { TableOfContentsPage } from './pages/TableOfContentsPage/TableOfContentsPage';

import { getGalleryImages } from '../constants/galleryImages';
import { commonStyles } from '@/pdf/styles/commonStyles';

const ProposalDocumentHTML = async data => {
  const galleryData = {
    images: await getGalleryImages(),
  };

  const coverPageHTML = await CoverPage(data);
  const tableOfContentsHTML = await TableOfContentsPage(data);
  const proposalPageHTML = await ProposalPage(data);
  const aboutStembotixPageHTML = await AboutStembotixPage(data);
  const projectProposalPageHTML = await ProjectProposalPage(data);
  const financialProposalPageHTML = await FinancialProposalPage(data);
  const galleryPageHTML = await GalleryPage(galleryData);
  const backPageHTML = await BackPage(data);

  return `
    <html>
      <head>
        ${commonStyles}
      </head>
      <body>
        ${coverPageHTML}
        ${tableOfContentsHTML}
        ${proposalPageHTML}
        ${aboutStembotixPageHTML}
        ${projectProposalPageHTML}
        ${financialProposalPageHTML}
        ${galleryPageHTML}
        ${backPageHTML}
      </body>
    </html>
  `;
};

export default ProposalDocumentHTML;
