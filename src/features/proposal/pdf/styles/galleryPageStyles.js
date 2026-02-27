export const galleryPageStyles = `
<style>
  .gallery-page {
    padding: 20px;
  }

  .page-break {
    page-break-after: always;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 10px;
  }

  img {
    width: 100%;
    height: 110px;
    object-fit: cover;
    border-radius: 4px;
  }
  
/*
  .grid {
    column-count: 4;
    column-gap: 10px;
    margin-top: 10px;
  }

  .grid img {
    width: 100%;
    height: auto;              /* CRITICAL: let height be natural */
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 4px;
    display: block;
    break-inside: avoid;       /* Prevent image splitting */
    page-break-inside: avoid;
  }
    */
</style>
`;
