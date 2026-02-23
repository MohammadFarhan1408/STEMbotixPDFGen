import RNFS from 'react-native-fs';

export const pickedImageToBase64 = async asset => {
  const uri = asset.uri;

  // Read the image as base64 (RNFS supports content:// on Android)
  const base64 = await RNFS.readFile(uri, 'base64');

  // Try to detect mime type
  const name = asset.fileName || uri;
  const ext = name.split('.').pop()?.toLowerCase();
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png';

  return `data:${mime};base64,${base64}`;
};
