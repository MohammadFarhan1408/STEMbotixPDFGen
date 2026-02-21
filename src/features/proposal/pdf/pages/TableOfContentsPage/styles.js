export const tableOfContentsStyles = `
<style>
  .toc-page__container {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
  }

  .toc-page__item {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 12px;
  }

  .toc-page__indent {
    margin-left: 20px;
  }

  .toc-page__text {
    font-size: 10px;
    font-weight: bold;
    color: #1e293b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-decoration: none;
    white-space: nowrap;
  }
  .toc-page__link {
    color: inherit;
    text-decoration: none;
  }
  .toc-page__dot-leader {
    flex-grow: 1;
    border-bottom: 1.5px dotted #cbd5e1;
    margin: 0 8px 3px 8px;
  }

  .toc-page__page-number {
    font-size: 10px;
    font-weight: bold;
    color: #3b82f6;
    min-width: 25px;
    text-align: right;
  }
</style>
`;
