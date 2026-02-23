export const photographStyles = `
<style>

.photo-grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
}

.photo-item {
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  aspect-ratio: 5/3;
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.no-photo {
  font-size: 10px;
  color: #64748b;
  margin-top: 10px;
}

</style>
`;
