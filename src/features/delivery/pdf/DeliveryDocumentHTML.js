import { CertificateCoverPage } from './pages/CertificateCoverPage';
import { AnnexureItemsPage } from './pages/AnnexureItemsPage';
import { VerificationPage } from './pages/VerificationPage';
import { SerialNumbersPage } from './pages/SerialNumbersPage';

import { commonStyles } from '@/pdf/styles/commonStyles';

const DeliveryDocumentHTML = async (deliveryData, items) => {
  const certificateCoverPageHTML = await CertificateCoverPage(deliveryData);
  const annexureItemsPageHTML = await AnnexureItemsPage(items);
  const verificationPageHTML = await VerificationPage(deliveryData);
  const serialNumbersPageHTML = await SerialNumbersPage(deliveryData);

  return `
    <html>
      <head>
        ${commonStyles}
      </head>
      <body>
        ${certificateCoverPageHTML}
        ${annexureItemsPageHTML}
        ${verificationPageHTML}
        ${serialNumbersPageHTML}
      </body>
    </html>
  `;
};

export default DeliveryDocumentHTML;
