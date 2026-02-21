import PDFHeader from './PDFHeader';
import PDFFooter from './PDFFooter';

const PDFPageLayout = async content => {
  const header = await PDFHeader();
  const footer = await PDFFooter();

  return `
    <div class="page">
      ${header}
      <div class="page-content">
        ${content}
      </div>
      ${footer}
    </div>
  `;
};

export default PDFPageLayout;
