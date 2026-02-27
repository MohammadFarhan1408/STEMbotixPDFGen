import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { serialNumberStyles } from '../styles/serialNumberStyles';
import { formattedDate } from '@/utils/formatDate';

export const SerialNumbersPage = async data => {
  const { serialNumbers = {}, verification = {} } = data || {};

  const printers =
    serialNumbers?.printers?.filter(sn => sn && sn.trim() !== '') || [];

  const laptops =
    serialNumbers?.laptops?.filter(sn => sn && sn.trim() !== '') || [];

  const formattedVerificationDate = verification?.verificationDate
    ? formattedDate(new Date(verification.verificationDate))
    : null;

  const generateRows = (list, emptyLabel) => {
    if (!list.length) {
      return `
        <tr>
          <td colspan="2" class="serial-page__empty">
            ${emptyLabel}
          </td>
        </tr>
      `;
    }

    return list
      .map(
        (sn, index) => `
        <tr>
          <td class="col-sr">${index + 1}</td>
          <td class="col-serial">${sn}</td>
        </tr>
      `,
      )
      .join('');
  };

  const content = `
    ${serialNumberStyles}

    <div class="serial-page">

      <div class="serial-page__title">
        Annexure–II: Hardware Identification & Serial Number Log
      </div>

      <!-- 3D Printers -->
      <div class="serial-page__section-title">
        1. 3D Printers
      </div>

      <table class="serial-page__table">
        <thead>
          <tr class="serial-page__header-row">
            <th class="col-sr">Sr. No.</th>
            <th class="col-serial">Serial Number of 3D Printer</th>
          </tr>
        </thead>
        <tbody>
          ${generateRows(printers, 'No serial numbers provided')}
        </tbody>
      </table>

      <!-- Laptops -->
      <div class="serial-page__section-title">
        2. Laptops
      </div>

      <table class="serial-page__table">
        <thead>
          <tr class="serial-page__header-row">
            <th class="col-sr">Sr. No.</th>
            <th class="col-serial">Serial Number of Laptops</th>
          </tr>
        </thead>
        <tbody>
          ${generateRows(laptops, 'No serial numbers provided')}
        </tbody>
      </table>

      <!-- Footer -->
      <div class="serial-page__footer">
        <div class="serial-page__date">
          Date: ${formattedVerificationDate || '—'}
        </div>

        <div class="serial-page__stamp">
          Sign and Stamp of School
        </div>
      </div>

    </div>
  `;

  return await PDFPageLayout(content);
};
