export const verificationStyles = `
<style>

  .verification-page {
    font-family: Arial, sans-serif;
    font-size: 10px;
    color: #000;
  }

  .verification-page__title {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 8px;
  }

  .verification-page__declaration {
    border: 0.8px solid #444;
    padding: 12px;
    margin-bottom: 20px;
    background-color: #f5f7fa;
    border-radius: 2px;
    line-height: 1.5;
    text-align: justify;
    font-size: 10.5px;
    color: #222;
  }

  .verification-page__table {
    width: 100%;
    border-collapse: collapse;
    border: 0.8px solid #000;
    margin-bottom: 26px;
  }

  .verification-page__table th,
  .verification-page__table td {
    border: 0.5px solid #aaa;
    padding: 8px 6px;
    font-size: 9.5px;
  }

  .verification-page__header-row {
    background-color: #e9ecef;
    font-weight: bold;
    text-align: left;
  }

  .col-role {
    width: 30%;
  }

  .col-name {
    width: 40%;
  }

  .col-sign {
    width: 30%;
    min-height: 34px;
  }

  .alt-row {
    background-color: #fafafa;
  }

  .verification-page__footer {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 11px;
  }

  /* Pagination Safety */
  thead {
    display: table-header-group;
  }

  tr {
    page-break-inside: avoid;
  }

</style>
`;
