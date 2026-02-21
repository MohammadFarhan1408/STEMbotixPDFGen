export const challengesStyles = `
<style>

  .challenges__container {
    display: flex;
    flex-direction: column;
  }

  .challenges__box {
    position: relative;
    padding-left: 15px;
    margin-bottom: 20px;
  }

  .challenges__accent {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    border-radius: 2px;
  }

  .challenges__accent.red {
    background: #ef4444;
  }

  .challenges__accent.blue {
    background: #3b82f6;
  }

  .challenges__label {
    font-size: 9px;
    font-weight: bold;
    color: #64748b;
    letter-spacing: 1px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .challenges__text {
    font-size: 10px;
    line-height: 1.6;
    color: #334155;
    text-align: justify;
  }

  .challenges__lessons {
    background: #f8fafc;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    padding: 12px;
  }

  .challenges__lessons-title {
    font-size: 10px;
    font-weight: bold;
    color: #1e293b;
    margin-bottom: 10px;
    text-align: center;
    letter-spacing: 0.5px;
  }

  .challenges__lessons-content {
    border-top: 1px solid #cbd5e1;
    padding-top: 12px;
    font-size: 10px;
    font-style: italic;
    line-height: 1.6;
    color: #475569;
    text-align: center;
  }

</style>
`;
