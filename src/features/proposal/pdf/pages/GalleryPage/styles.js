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
</style>
`;
