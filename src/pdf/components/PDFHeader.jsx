import { Image, Platform } from 'react-native';
import { getBase64Image } from '@/utils/imageUtils';
import { getPdfAssetUri } from '@/utils/pdfAssetUri';

const PDFHeader = async () => {
  // Resolve the local asset to a URI that the HTML renderer can read
  const STEMbotixLogo = getPdfAssetUri(
    Platform.OS === 'android'
      ? 'pdf/STEMbotix-Logo.png'
      : require('@/assets/images/STEMbotix-Logo.png'),
  );

  return `
    <style>
      .header-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        width: 100%;
        z-index: 1000;
        box-sizing: border-box;
      }

      .logo-section {
        margin-left: 50px;
        padding: 10px 0;
        width: 180px;
        height: auto;
      }

      .logo-img {
        width: 100%;
        height: auto;
      }

      .ribbon-wrapper {
        width: 300px;
        height: 60px;
      }

      .header-svg {
        width: 100%;
        height: 100%;
      }
    </style>

    <div class="header-container">
      <div class="logo-section">
        <img src="${STEMbotixLogo}" class="logo-img" />
      </div>

      <div class="ribbon-wrapper">
        <svg viewBox="0 0 400 60" class="header-svg" preserveAspectRatio="none">
          <polygon points="30,0 0,0 30,60 60,60" fill="#2E3192" />
          <polygon points="105,0 40,0 70,60 135,60" fill="#F15A24" />
          <polygon points="145,60 400,60 400,0 115,0" fill="#2E3192" />
        </svg>
      </div>
    </div>
  `;
};

export default PDFHeader;
