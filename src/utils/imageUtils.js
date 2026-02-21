import { Image, PermissionsAndroid, Platform, Alert } from 'react-native';
import RNFS from 'react-native-fs';
import RNBlobUtil from 'react-native-blob-util';

// async function ensureReadPermission() {
//   if (Platform.OS === 'android') {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       {
//         title: 'Storage permission',
//         message: 'Required to read images for PDF generation.',
//       },
//     );
//     return granted === PermissionsAndroid.RESULTS.GRANTED;
//   }
//   return true;
// }

// export const getBase64Image = async img => {
//   await ensureReadPermission();

//   const asset = Image.resolveAssetSource(img);
//   const uri = asset.uri;

//   try {
//     let base64;
//     let finalPath = uri;

//     if (Platform.OS === 'android' && uri.startsWith('asset:/')) {
//       // Extract filename
//       const filename = uri.replace('asset:/', '');

//       // Copy asset to cache directory
//       const destPath = `${RNFS.CachesDirectoryPath}/${filename}`;

//       const exists = await RNFS.exists(destPath);
//       if (!exists) {
//         await RNFS.copyFileAssets(filename, destPath);
//       }

//       finalPath = destPath;
//     }

//     if (uri.startsWith('http')) {
//       const response = await fetch(uri);
//       const blob = await response.blob();

//       base64 = await new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result.split(',')[1]);
//         reader.onerror = reject;
//         reader.readAsDataURL(blob);
//       });
//     } else {
//       base64 = await RNFS.readFile(finalPath, 'base64');
//     }

//     const ext = finalPath.split('.').pop().toLowerCase();
//     const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png';

//     return `data:${mime};base64,${base64}`;
//   } catch (error) {
//     Alert.alert('Error converting image to base64:', error.message || error);
//     throw error;
//   }
// };

// export const getImageUri = async img => {
//   const asset = Image.resolveAssetSource(img);
//   let uri = asset.uri;

//   if (Platform.OS === 'android' && uri.startsWith('asset:/')) {
//     const filename = uri.replace('asset:/', '');
//     const destPath = `${RNFS.CachesDirectoryPath}/${filename}`;

//     const exists = await RNFS.exists(destPath);
//     if (!exists) {
//       await RNFS.copyFileAssets(filename, destPath);
//     }

//     uri = `file://${destPath}`;
//   }

//   return uri;
// };

export const getBase64Image = async img => {
  const asset = Image.resolveAssetSource(img);
  let uri = asset.uri;

  try {
    // RNBlobUtil can read asset/content/file URIs
    const base64 = await RNBlobUtil.fs.readFile(uri, 'base64');

    const ext = uri.split('.').pop()?.toLowerCase();
    const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png';

    return `data:${mime};base64,${base64}`;
  } catch (error) {
    console.error('Base64 conversion failed for:', uri, error);
    throw error;
  }
};
