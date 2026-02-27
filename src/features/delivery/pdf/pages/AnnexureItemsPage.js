import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import { annexureStyles } from '../styles/annexureStyles';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

export const AnnexureItemsPage = async items => {
  const list = Array.isArray(items) ? items : [];

  const pages = chunk(list, 42);

  const htmlPages = await Promise.all(
    pages.map(async (pageItems, pageIndex) => {
      const rowsHtml =
        pageItems.length > 0
          ? pageItems
              .map(
                (item, index) => `
          <tr class="annexure-page__row ${
            index % 2 === 0 ? 'annexure-page__alt-row' : ''
          }">
            <td class="col-sr">${pageIndex * 35 + index + 1}</td>
            <td class="col-name">${item.itemName || '—'}</td>
            <td class="col-qty">${item.quantity ?? '—'}</td>
            <td class="col-check">
              ${item.received ? 'Yes' : 'No'}
            </td>
          </tr>
        `,
              )
              .join('')
          : `
          <tr>
            <td colspan="4" class="annexure-page__empty">
              No items found. Please upload Excel file.
            </td>
          </tr>
        `;

      const content = `
        ${annexureStyles}

        <div class="annexure-page">
        
          <div class="annexure-page__title">
            Annexure–I: Item Specification and Quantity Checklist
          </div>

          <table class="annexure-page__table">
            <thead>
              <tr class="annexure-page__header-row">
                <th class="col-sr">Sr</th>
                <th class="col-name">Description of Goods</th>
                <th class="col-qty">Qty</th>
                <th class="col-check">Received</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      `;

      return await PDFPageLayout(content);
    }),
  );

  return htmlPages.join('');
};
