import { Platform, Image } from 'react-native';

export const getPdfAssetUri = img => {
  if (Platform.OS === 'android') {
    // img here should be a string like 'gallery/img1.jpg' or 'pdf/logo.png'
    return `file:///android_asset/images/${img}`;
  }

  // iOS: resolve from app bundle
  const asset = Image.resolveAssetSource(img);
  return asset.uri;
};
