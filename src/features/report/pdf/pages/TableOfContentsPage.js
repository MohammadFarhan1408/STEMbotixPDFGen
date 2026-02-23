import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';
import { tableOfContentsStyles } from '../styles/tableOfContentsStyles';

export const TableOfContentsPage = async data => {
  const pageBlocks = [
    { items: [{ title: 'Proposal', target: 'proposal' }] },
    { items: [{ title: 'About STEMbotix', target: 'about-stembotix' }] },
    { items: [{ title: 'Project Proposal', target: 'project-proposal' }] },
    { items: [{ title: 'Financial Proposal', target: 'financial-proposal' }] },
    { items: [{ title: 'Gallery', target: 'gallery' }] },
  ];

  const START_PAGE = 3;
  let INDEX_NUM = 1;

  const rowsHtml = pageBlocks
    .map((block, blockIndex) => {
      const pageNumber = START_PAGE + blockIndex;

      const visibleItems = block.items.filter(
        item => !item.optional || item.show,
      );

      if (visibleItems.length === 0) return '';

      return visibleItems
        .map(item => {
          return `
            <div class="toc-page__item">
              <div class="toc-page__text">
                <a href="#${item.target}" class="toc-page__link">
                  ${INDEX_NUM++}. ${item.title}
                </a>
              </div>

              <div class="toc-page__dot-leader"></div>

              <div class="toc-page__page-number">${pageNumber}</div>
            </div>
          `;
        })
        .join('');
    })
    .join('');

  const content = `
    ${tableOfContentsStyles}

    <div class="toc-page__container">
      ${SectionTitle({ title: 'Table of Contents' })}
      ${rowsHtml}
    </div>
  `;

  return await PDFPageLayout(content);
};
