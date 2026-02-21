export const backPageStyles = `
<style>

  .back-page__container {
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    padding: 60px;
    background-color: #F8FAFC;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .back-page__top-accent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-color: #1A365D;
  }

  .back-page__content {
    margin-top: 100px;
    flex-grow: 1;
  }

  .back-page__thank-you {
    font-size: 24px;
    font-weight: bold;
    color: #1A365D;
    margin-bottom: 15px;
  }

  .back-page__divider {
    width: 60px;
    height: 3px;
    background-color: #3b82f6;
    margin-bottom: 20px;
  }

  .back-page__note {
    font-size: 12px;
    color: #64748b;
    line-height: 1.6;
    max-width: 350px;
  }

  /* Optional Footer */
  .back-page__footer {
    border-top: 1px solid #E2E8F0;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .back-page__contact {
    display: flex;
    flex-direction: column;
  }

  .contact-heading {
    font-size: 10px;
    font-weight: bold;
    color: #1A365D;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  .contact-link {
    font-size: 10px;
    color: #475569;
    margin-bottom: 4px;
  }

  .back-page__logo-section {
    text-align: right;
  }

  .footer-logo {
    width: 100px;
    margin-bottom: 10px;
    opacity: 0.8;
  }

  .copyright {
    font-size: 8px;
    color: #94a3b8;
  }

</style>
`;
