import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { verificationStyles } from '../styles/verificationStyles';
import { formattedDate } from '@/utils/formatDate';

export const VerificationPage = async data => {
  const { verification = {} } = data || {};

  const {
    schoolAuthorityName,
    schoolAuthorityDesignation,
    stembotixRepresentativeName,
    yuvaCoordinatorName,
    verificationDate,
  } = verification;

  const formattedVerificationDate = verificationDate
    ? formattedDate(new Date(verificationDate))
    : null;

  const content = `
    ${verificationStyles}

    <div class="verification-page">

      <div class="verification-page__title">
        Verification & Authorization
      </div>

      <div class="verification-page__declaration">
        The undersigned hereby confirms that the 
        <b>items listed in Annexure–I have been physically verified</b>, 
        found in accordance with the approved specifications and quantities, 
        and are <b>acceptable to the school</b>. Installation has been 
        inspected and no discrepancies were observed at the time of verification.
      </div>

      <table class="verification-page__table">
        <thead>
          <tr class="verification-page__header-row">
            <th class="col-role">Role</th>
            <th class="col-name">Name & Designation</th>
            <th class="col-sign">Signature</th>
          </tr>
        </thead>
        <tbody>

          <tr class="alt-row">
            <td class="col-role">
              School Authority (Verified By)
            </td>
            <td class="col-name">
              ${schoolAuthorityName || '—'}
              ${
                schoolAuthorityDesignation
                  ? `, ${schoolAuthorityDesignation}`
                  : ''
              }
            </td>
            <td class="col-sign"></td>
          </tr>

          <tr>
            <td class="col-role">
              STEMbotix Representative (Delivered By)
            </td>
            <td class="col-name">
              ${stembotixRepresentativeName || '—'}
            </td>
            <td class="col-sign"></td>
          </tr>

          <tr class="alt-row">
            <td class="col-role">
              Yuva Unstoppable Coordinator
            </td>
            <td class="col-name">
              ${yuvaCoordinatorName || '—'}
            </td>
            <td class="col-sign"></td>
          </tr>

        </tbody>
      </table>

      <div class="verification-page__footer">
        <div class="verification-page__date">
          Date: ${formattedVerificationDate || '—'}
        </div>

        <div class="verification-page__stamp">
          School Seal & Signature
        </div>
      </div>

    </div>
  `;

  return await PDFPageLayout(content);
};
