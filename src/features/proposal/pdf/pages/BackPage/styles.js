export const backPageStyles = `
<style>
  .back-page__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
  }

  .back-page__center-content {
    align-items: center;
    text-align: center;
    padding: 0 60px;
    margin-top: 200px; /* tweak if you want it more/less centered vertically */
  }

  .back-page__thank-you {
    font-size: 36px;
    font-weight: bold;
    color: #1e40af;
    margin-bottom: 20px;
  }

  .back-page__message {
    font-size: 14px;
    text-align: center;
    color: #334155;
    line-height: 1.5;
    white-space: pre-line; /* keeps line breaks */
  }

  .back-page__footer {
    align-items: center;
    text-align: center;
    padding-bottom: 40px;
  }

  .back-page__company {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #0f172a;
    letter-spacing: 1px;
  }

  .back-page__contact-line {
    font-size: 11px;
    color: #475569;
    margin-bottom: 3px;
  }
</style>
`;
