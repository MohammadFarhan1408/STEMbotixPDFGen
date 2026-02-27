import PDFPageLayout from '@/pdf/components/PDFPageLayout';
import SectionTitle from '@/pdf/components/SectionTitle';
import { galleryPageStyles } from '../styles/galleryPageStyles';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

export const GalleryPage = async data => {
  // data.images should be array of URIs
  const images = data?.images || [];

  // adjust 20 based on layout density
  const pages = chunk(images, 28);

  const content = `
    ${galleryPageStyles}
    <div id="gallery">
    ${SectionTitle({ title: `Gallery Page` })}

    ${pages
      .map(
        (pageImages, pageIndex) => `
        <div class="gallery-page page-break">

          <div class="grid" style="margin-top: ${
            pageIndex === 0 ? '0' : '60px'
          }">
            ${pageImages.map(uri => `<img src="${uri}" />`).join('')}
          </div>
        </div>
      `,
      )
      .join('')}
    </div>
  `;

  return await PDFPageLayout(content);
};
