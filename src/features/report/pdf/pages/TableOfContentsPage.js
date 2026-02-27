import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';
import { tableOfContentsStyles } from '../styles/tableOfContentsStyles';
import { useReportStore } from '@/store/reportStore';

export const TableOfContentsPage = async data => {
  const { economicImpact } = useReportStore.getState();

  const isEconomicEmpty =
    !economicImpact?.employabilityEnhancement &&
    !economicImpact?.incomeOpportunities &&
    !economicImpact?.costPerBeneficiary &&
    !economicImpact?.roi;

  const pageBlocks = [
    { items: [{ title: 'Summary', target: 'summary' }] },

    { items: [{ title: 'Project Overview', target: 'project-overview' }] },

    {
      items: [
        {
          title: 'Objectives & Intended Outcomes',
          target: 'objectives',
        },
        {
          optional: true,
          show: !isEconomicEmpty,
          title: 'Economic Impact',
          target: 'economic-impact',
        },
      ],
    },

    {
      items: [
        { title: 'Beneficiary Profile', target: 'beneficiary' },
        { title: 'Baseline vs Endline Comparison', target: 'baseline' },
      ],
    },

    {
      items: [
        { title: 'Qualitative Impact', target: 'qualitative-impact' },
        { title: 'Quantitative Impact', target: 'quantitative-impact' },
      ],
    },

    {
      items: [
        {
          title: 'Learning & Skill Outcomes',
          target: 'learning-and-skill',
        },
        {
          title: 'Institutional / Ecosystem Impact',
          target: 'institutional-impact',
        },
      ],
    },

    {
      items: [
        { title: 'Social Impact', target: 'social-impact' },
        {
          title: 'Innovation & Technology Impact',
          target: 'innovation-impact',
        },
      ],
    },

    {
      items: [
        { title: 'Case Studies / Success Stories', target: 'case-studies' },
        { title: 'Challenges & Learnings', target: 'challenges-learning' },
      ],
    },

    {
      items: [
        { title: 'Sustainability & Scalability', target: 'sustainability' },
        {
          title: 'Monitoring & Evaluation Methodology',
          target: 'monitoring-evaluation',
        },
      ],
    },
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
