import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';
import { photographStyles } from '../styles/photographStyles';

export const PhotographsPage = async data => {
  const photographs = data?.photographs || [];

  const imagesHTML = photographs
    .slice(0, 8) // limit to 8 like original
    .map(uri => {
      // const uri = photo?.uri || photo; // supports both formats
      return `
        <div class="photo-item">
          <img src="${uri}" />
        </div>
      `;
    })
    .join('');

  if (!photographs.length) {
    return `
      ${photographStyles}
      <div class="no-photo">
        No photographs were uploaded for this reporting period.
      </div>
    `;
  }

  const content = `
    ${SectionTitle({ title: 'Photographs' })}
    ${photographStyles}
    <div class="photo-grid">
      ${imagesHTML}
    </div>
  `;

  return await PDFPageLayout(content);
};
