export const photographStyles = `
<style>

.photo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
}

.photo-item {
  width: 48%;
  height: 140px;
  margin-bottom: 14px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
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
