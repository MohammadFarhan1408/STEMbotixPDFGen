export const annexureStyles = `
<style>

  .annexure-page {
    font-family: Arial, sans-serif;
    font-size: 9px;
    color: #000;
  }

  .page-break {
    page-break-after: always;
  }

  .annexure-page__title {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 12px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .annexure-page__table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #333;
  }

  .annexure-page__table tr {
    page-break-inside: avoid;
  }
    
  /*
  .annexure-page__header-row < thead{
    padding-top: 20px;
  }

  .annexure-page__table tbody{
    margin-bottom: 80px;
  }
  */

  .annexure-page__table th,
  .annexure-page__table td {
    border: 0.5px solid #aaa;
    padding: 5px 6px;
    font-size: 9px;
  }

  .annexure-page__header-row {
    background-color: #e4e4e4;
    font-weight: bold;
    text-align: center;
  }

  .annexure-page__row {
    background-color: #ffffff;
  }

  .annexure-page__alt-row {
    background-color: #f9f9f9;
  }

  .col-sr {
    width: 8%;
    text-align: center;
  }

  .col-name {
    width: 62%;
  }

  .col-qty {
    width: 12%;
    text-align: center;
  }

  .col-check {
    width: 18%;
    text-align: center;
  }

  .annexure-page__empty {
    text-align: center;
    padding: 14px;
    font-size: 10px;
    color: #666;
  }

</style>
`;
