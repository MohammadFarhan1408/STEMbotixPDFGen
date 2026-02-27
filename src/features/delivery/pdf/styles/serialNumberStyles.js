export const serialNumberStyles = `
<style>

  .serial-page {
    font-family: Arial, sans-serif;
    font-size: 9.5px;
    color: #000;
  }

  .serial-page__title {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  .serial-page__section-title {
    font-size: 11px;
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 6px;
  }

  .serial-page__table {
    width: 100%;
    border-collapse: collapse;
    border: 0.8px solid #000;
    margin-bottom: 26px;
  }

  .serial-page__table th,
  .serial-page__table td {
    border: 0.5px solid #aaa;
    padding: 8px 6px;
    font-size: 9.5px;
  }

  .serial-page__header-row {
    background-color: #e9ecef;
    font-weight: bold;
    text-align: center;
  }

  .col-sr {
    width: 15%;
    text-align: center;
  }

  .col-serial {
    width: 85%;
  }

  .serial-page__footer {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 11px;
  }

  .serial-page__empty {
    text-align: center;
    padding: 10px;
    font-size: 9px;
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
