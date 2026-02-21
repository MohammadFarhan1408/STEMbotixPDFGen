export const commonStyles = `
<style type="text/css" media="print">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  @page {
    size: A4;
  }
  .page {
    page-break-after: always;
    padding: 40px;
    padding-top: 60px;
    font-family: "Helvetica", sans-serif;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 170px);
  }

  .page-content {
    flex: 1;
  }


  .header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 2px solid #2563eb;
  }

  .title {
    font-size: 22px;
    font-weight: bold;
    color: #0f172a;
  }

  .watermark {
  
  }

  .section-spacing {
    margin-top: 40px;
  }

  h1 { font-size: 28px; margin-bottom: 16px; }
  h2 { font-size: 20px; margin-bottom: 12px; }
  p { font-size: 14px; line-height: 1.6; }
</style>
`;
