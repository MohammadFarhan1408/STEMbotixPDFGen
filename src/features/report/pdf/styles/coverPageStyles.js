export const coverPageStyles = `
  <style>
    .cover-page__container {
      font-family: Arial, Helvetica, sans-serif;
      padding: 60px 50px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
    }

    .cover-page__main {
      margin-top: 40px;
      flex-grow: 1;
    }

    .cover-page__accent-bar {
      width: 40px;
      height: 4px;
      background-color: #1A365D;
      margin-bottom: 20px;
    }

    .cover-page__report-type {
      font-size: 14px;
      color: #4A5568;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }

    .cover-page__title {
      font-size: 32px;
      font-weight: bold;
      color: #1A365D;
      line-height: 1.2;
      margin-bottom: 20px;
      text-transform: uppercase;
    }

    .cover-page__subtitle {
      font-size: 12px;
      color: #718096;
      line-height: 1.5;
      font-style: italic;
      max-width: 80%;
    }

    /* Optional Footer */
    .cover-page__footer {
      border-top: 1px solid #E2E8F0;
      padding-top: 20px;
      margin-bottom: 40px;
    }

    .info-row {
      display: flex;
      margin-bottom: 8px;
    }

    .label {
      font-size: 10px;
      color: #718096;
      width: 150px;
      font-weight: bold;
    }

    .value {
      font-size: 10px;
      color: #2D3748;
      flex: 1;
    }

    /* Logos */
    .cover-page__logos {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 80px;
    }

    .logo-left {
      width: 120px;
    }

    .logo-right {
      width: 140px;
    }
  </style>
`;
