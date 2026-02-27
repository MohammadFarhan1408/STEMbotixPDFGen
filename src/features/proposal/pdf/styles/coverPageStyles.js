export const coverPageStyles = `
<style>
  .cover-page__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    background: #fff;
  }

  /* Hide header and footer on cover page */
  .page:first-of-type .header-container,
  .page:first-of-type .pdf-footer {
    display: none;
  }

  .cover-page__top {
    padding: 40px;
    height: 400px;
    background: #1e40af;
    border-bottom-right-radius: 100px;
    color: white;
  }

  .cover-page__company {
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .cover-page__title {
    font-size: 42px;
    padding-top: 50px;
    font-weight: bold;
  }

  .cover-page__subtitle {
    font-size: 18px;
    margin-top: 10px;
  }

  .cover-page__details {
    padding: 40px;
  }
  .cover-page__info {
    margin-bottom: 20px;
  }
  .cover-page__label {
    font-size: 10px;
    color: #64748b;
    text-transform: uppercase;
  }

  .cover-page__value {
    font-size: 14px;
    font-weight: bold;
  }
</style>
`;
