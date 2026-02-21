import { Image, Platform } from 'react-native';
import { getPdfAssetUri } from '@/utils/pdfAssetUri';

const PDFFooter = async () => {
  const qrCode = getPdfAssetUri(
    Platform.OS === 'android'
      ? 'pdf/Footer-Qr-Code.png'
      : require('@/assets/images/Footer-Qr-Code.png'),
  );

  return `
    <style>
      .pdf-footer {
        position: fixed;
        width: 100%;
        height: 80px;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        box-sizing: border-box;
        padding-right: 20px;
      }

      .ribbon-wrapper {
        width: 300px;
        height: 60px;
        left: 0;
        
      }

      .info-container {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        justify-content: center;
      }

      .info-row {
        display: flex;
        margin-bottom: 4px;
      }

      .info-item {
        display: flex;
        align-items: center;
        width: 220px;
      }

      .icon {
        width: 20px;
        height: 20px;
        border-radius: 3px;
        margin-right: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .info-text {
        font-size: 9px;
        font-weight: bold;
        color: #000;
      }

      .address-text {
        font-size: 7px;
        font-weight: bold;
        color: #000;
        width: 150px;
        line-height: 1.2;
      }

      .qr-container {
        width: 65px;
        height: 65px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
      }

      .qr-container img {
        width: 60px;
        height: 60px;
      }
    </style>

    <div class="pdf-footer">
      
      <!-- Ribbon -->
      <div class="ribbon-wrapper">
        <svg viewBox="0 0 275 60" width="100%" height="100%">
          <polygon points="215,0 235,0 210,60 190,60" fill="#F15A24"/>
          <polygon points="160,0 205,0 180,60 135,60" fill="#2E3192"/>
          <polygon points="125,60 0,60 0,0 150,0" fill="#F15A24"/>
        </svg>
      </div>

      <!-- Info -->
      <div class="info-container">
        
        <div class="info-row">
          <!-- Phone -->
          <div class="info-item">
            <div class="icon" style="background:#2E3192;">
              <svg width="12" height="12" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.8 3.5 4.7 6.3 8.2 8.2l2.7-2.7c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V22c0 .6-.4 1-1 1C10.3 23 1 13.7 1 2c0-.6.4-1 1-1h4.5c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1L6.6 10.8z" fill="#fff"/>
              </svg>
            </div>
            <div class="info-text">(+91) 904 905 9006</div>
          </div>

          <!-- Address -->
          <div class="info-item">
            <div class="icon" style="background:#F15A24;">
              <svg width="12" height="12" viewBox="0 0 24 24">
                <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" fill="#fff"/>
                <circle cx="12" cy="10" r="3" fill="#F15A24"/>
              </svg>
            </div>
            <div class="address-text">
              B/33, Electronics Estate SECTOR 25 GIDC,
              Gandhinagar 24-GUJARAT 382024
            </div>
          </div>
        </div>

        <div class="info-row">
          <!-- Email -->
          <div class="info-item">
            <div class="icon" style="background:#F15A24;">
              <svg width="12" height="12" viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="14" rx="2" ry="2" stroke="#fff" stroke-width="2" fill="none"/>
                <path d="M3 7l9 6 9-6" stroke="#fff" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <div class="info-text">info@stembotix.com</div>
          </div>

          <!-- Website -->
          <div class="info-item">
            <div class="icon" style="background:#2E3192;">
              <svg width="12" height="12" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="2" fill="none"/>
                <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="#fff" stroke-width="1.5" fill="none"/>
              </svg>
            </div>
            <div class="info-text">www.stembotix.com</div>
          </div>
        </div>

      </div>

      <!-- QR -->
      <div class="qr-container">
        <img src="${qrCode}" alt="QR"/>
      </div>

    </div>
  `;
};

export default PDFFooter;
