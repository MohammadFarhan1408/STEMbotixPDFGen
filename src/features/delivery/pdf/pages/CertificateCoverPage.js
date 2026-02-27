import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { certificateCoverStyles } from '../styles/certificateCoverStyles';
import { formattedDate } from '@/utils/formatDate';

export const CertificateCoverPage = async data => {
  const { deliveryBasicInfo = {}, schoolDelivery = {} } = data || {};

  const { subject, purchaseOrderNo, purchaseOrderDate } = deliveryBasicInfo;

  const {
    schoolName,
    schoolAddress,
    deliveredAndInstalledBy,
    deliveredByContactNo,
    receivedBy,
    receivedByContactNo,
  } = schoolDelivery;

  const currentDate = formattedDate(new Date());
  const formattedPurchaseOrderDate = formattedDate(
    purchaseOrderDate ? new Date(purchaseOrderDate) : null,
  );

  const content = `
    ${certificateCoverStyles}

    <div class="certificate-page">

      <!-- Top Date -->
      <div class="certificate-page__top-row">
        Date: ${currentDate || '—'}
      </div>

      <!-- Title -->
      <div class="certificate-page__title">
        DELIVERY & INSTALLATION CERTIFICATE
      </div>

      <div class="certificate-page__salutation">
        TO WHOMSOEVER IT MAY CONCERN
      </div>

      <!-- Subject -->
      <div class="certificate-page__row">
        <div class="certificate-page__label">Subject:</div>
        <div class="certificate-page__value">
          ${subject || '—'}
        </div>
      </div>

      <!-- Reference -->
      <div class="certificate-page__row">
        <div class="certificate-page__label">References:</div>
        <div class="certificate-page__value">
          Purchase Order 
          <b>PO-${purchaseOrderNo || '—'}</b> 
          on Dated 
          <b>${formattedPurchaseOrderDate || '—'}</b>
        </div>
      </div>

      <!-- Body -->
      <div class="certificate-page__paragraph">
        This is to certify that 
        <b>STEMbotix Private Limited</b> 
        has successfully delivered and installed the STEM Lab items at the
        school premises as per the specifications and quantities mentioned in
        the work order issued by Yuva Unstoppable and Annexure-I.
      </div>

      <div class="certificate-page__paragraph">
        The detailed item list and quantities are provided in Annexure-I.
      </div>

      <!-- Delivery Details -->
      <div class="certificate-page__section-title">
        Delivery Details
      </div>

      <table class="certificate-page__table">
        <tr>
          <td class="label-col">School Name</td>
          <td colspan="3">${schoolName || '—'}</td>
        </tr>
        <tr>
          <td class="label-col">Address</td>
          <td colspan="3">${schoolAddress || '—'}</td>
        </tr>
        <tr>
          <td class="label-col">Delivered & Installed By</td>
          <td>${deliveredAndInstalledBy || '—'}</td>
          <td class="label-col">Contact</td>
          <td>${deliveredByContactNo || '—'}</td>
        </tr>
        <tr>
          <td class="label-col">Received By</td>
          <td>${receivedBy || '—'}</td>
          <td class="label-col">Contact</td>
          <td>${receivedByContactNo || '—'}</td>
        </tr>
      </table>

      <!-- Declaration -->
      <div class="certificate-page__declaration">
        <div class="certificate-page__declaration-title">
          Declaration
        </div>
        <div>
          We hereby declare that all the items supplied by STEMbotix Private
          Limited have been received in full, installed correctly, and are in
          good working condition, as per the specifications and quantities
          mentioned in the work order and Annexure–I. The installation has been
          physically verified and found satisfactory.
        </div>
      </div>

      <!-- Signatures -->
      <div class="certificate-page__signature-section">
        <div class="certificate-page__signature-box">
          <div class="certificate-page__signature-line"></div>
          Delivery Person Sign
        </div>

        <div class="certificate-page__signature-box">
          <div class="certificate-page__signature-line"></div>
          Sign and Stamp of School
        </div>
      </div>

    </div>
  `;

  return await PDFPageLayout(content);
};
