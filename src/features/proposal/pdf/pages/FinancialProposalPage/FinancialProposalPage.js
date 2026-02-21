import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';
import { financialProposalStyles } from './styles';

export const FinancialProposalPage = async data => {
  const items = data?.financialProposal || [];

  const totalAmount = items.reduce(
    (sum, item) => sum + (Number(item.amount) || 0),
    0,
  );

  const headerRow = `
    <div class="financial-page__table-row financial-page__table-header">
      <div class="financial-page__cell financial-page__sr-col">Sr. No.</div>
      <div class="financial-page__cell financial-page__particular-col">Particular</div>
      <div class="financial-page__cell financial-page__desc-col">Description</div>
      <div class="financial-page__cell financial-page__amount-col">Amount</div>
    </div>
  `;

  const bodyRows =
    items.length > 0
      ? items
          .map(
            (item, index) => `
        <div class="financial-page__table-row">
          <div class="financial-page__cell financial-page__sr-col">${
            index + 1
          }</div>
          <div class="financial-page__cell financial-page__particular-col">
            ${item.particular || '-'}
          </div>
          <div class="financial-page__cell financial-page__desc-col">
            ${item.description || '-'}
          </div>
          <div class="financial-page__cell financial-page__amount-col">
            Rs. ${Number(item.amount || 0).toLocaleString()}
          </div>
        </div>
      `,
          )
          .join('')
      : `
        <div class="financial-page__table-row">
          <div class="financial-page__empty-text">No financial items added.</div>
        </div>
      `;

  const totalRow = `
    <div class="financial-page__table-row financial-page__total-row">
      <div class="financial-page__cell financial-page__total-label">Total Amount</div>
      <div class="financial-page__cell financial-page__amount-col financial-page__total-amount">
        Rs. ${totalAmount.toLocaleString()}
      </div>
    </div>
  `;

  const contactSection = `
    <div class="financial-page__contact-section">
      <div class="financial-page__contact-heading">Contact Person Details</div>
      <div class="financial-page__contact-line">Isha Bhagat</div>
      <div class="financial-page__contact-line">
        Designation: Chief Operational Officer (COO)
      </div>
      <div class="financial-page__contact-line">Contact No.: 9726519892</div>
      <div class="financial-page__contact-line">Email ID: isha@stembotix.com</div>
    </div>
  `;

  const content = `
    ${financialProposalStyles}

    <div id="financial-proposal" class="financial-page">
      ${SectionTitle({ title: 'Financial Proposal' })}

      ${headerRow}
      ${bodyRows}
      ${totalRow}

      ${contactSection}
    </div>
  `;

  return await PDFPageLayout(content);
};
