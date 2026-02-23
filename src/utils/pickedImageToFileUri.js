import RNFS from 'react-native-fs';

export const pickedImageToFileUri = async asset => {
  const srcUri = asset.uri;
  const filename = asset.fileName || `photo_${Date.now()}.jpg`;
  const destPath = `${RNFS.CachesDirectoryPath}/${filename}`;

  // Read the source image as base64
  const base64Data = await RNFS.readFile(srcUri, 'base64');

  // Write it to cache as a real file
  await RNFS.writeFile(destPath, base64Data, 'base64');
  console.log(
    'Saved image to:',
    destPath,
    'exists:',
    await RNFS.exists(destPath),
  );
  return `file://${destPath}`;
};
