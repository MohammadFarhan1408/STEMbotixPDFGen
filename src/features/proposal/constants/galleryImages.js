import { Image, Platform } from 'react-native';
import { getBase64Image } from '../../../utils/imageUtils';
import { getPdfAssetUri } from '../../../utils/pdfAssetUri';

// const images = [
//   require('../../../assets/images/Gallery/img1.jpg'),
//   require('../../../assets/images/Gallery/img3.jpg'),
//   require('../../../assets/images/Gallery/img4.jpg'),
//   require('../../../assets/images/Gallery/img5.jpg'),
//   require('../../../assets/images/Gallery/img6.jpg'),
//   require('../../../assets/images/Gallery/img7.jpg'),
//   require('../../../assets/images/Gallery/img8.jpg'),
//   require('../../../assets/images/Gallery/img9.jpg'),

//   require('../../../assets/images/Gallery/img10.jpg'),
//   require('../../../assets/images/Gallery/img11.jpg'),
//   require('../../../assets/images/Gallery/img12.jpg'),
//   require('../../../assets/images/Gallery/img13.jpg'),
//   require('../../../assets/images/Gallery/img14.jpg'),
//   require('../../../assets/images/Gallery/img15.jpg'),
//   require('../../../assets/images/Gallery/img16.jpg'),
//   require('../../../assets/images/Gallery/img161.jpg'),
//   require('../../../assets/images/Gallery/img17.jpg'),
//   require('../../../assets/images/Gallery/img18.jpg'),
//   require('../../../assets/images/Gallery/img181.jpg'),
//   require('../../../assets/images/Gallery/img19.jpg'),

//   require('../../../assets/images/Gallery/img20.jpg'),
//   require('../../../assets/images/Gallery/img21.jpg'),
//   require('../../../assets/images/Gallery/img22.jpg'),
//   require('../../../assets/images/Gallery/img23.jpg'),
//   require('../../../assets/images/Gallery/img25.jpg'),
//   require('../../../assets/images/Gallery/img26.jpg'),
//   require('../../../assets/images/Gallery/img27.jpg'),
//   require('../../../assets/images/Gallery/img271.jpg'),
//   require('../../../assets/images/Gallery/img28.jpg'),
//   require('../../../assets/images/Gallery/img29.jpg'),

//   require('../../../assets/images/Gallery/img30.jpg'),
//   require('../../../assets/images/Gallery/img31.jpg'),
//   require('../../../assets/images/Gallery/img32.jpg'),
//   require('../../../assets/images/Gallery/img34.jpg'),
//   require('../../../assets/images/Gallery/img35.jpg'),
//   require('../../../assets/images/Gallery/img36.jpg'),
//   require('../../../assets/images/Gallery/img37.jpg'),
//   require('../../../assets/images/Gallery/img38.jpg'),
//   require('../../../assets/images/Gallery/img39.jpg'),

//   require('../../../assets/images/Gallery/img40.jpg'),
//   require('../../../assets/images/Gallery/img41.jpg'),
//   require('../../../assets/images/Gallery/img410.jpg'),
//   require('../../../assets/images/Gallery/img411.jpg'),
//   require('../../../assets/images/Gallery/img42.jpg'),
//   require('../../../assets/images/Gallery/img43.jpg'),
//   require('../../../assets/images/Gallery/img44.jpg'),
//   require('../../../assets/images/Gallery/img441.jpg'),
//   require('../../../assets/images/Gallery/img45.jpg'),
//   require('../../../assets/images/Gallery/img46.jpg'),
//   require('../../../assets/images/Gallery/img47.jpg'),
//   require('../../../assets/images/Gallery/img471.jpg'),
//   require('../../../assets/images/Gallery/img48.jpg'),

//   require('../../../assets/images/Gallery/img52.jpg'),
//   require('../../../assets/images/Gallery/img53.jpg'),
//   require('../../../assets/images/Gallery/img54.jpg'),
//   require('../../../assets/images/Gallery/img55.jpg'),
//   require('../../../assets/images/Gallery/img56.jpg'),
//   require('../../../assets/images/Gallery/img57.jpg'),
//   require('../../../assets/images/Gallery/img58.jpg'),
//   require('../../../assets/images/Gallery/img59.jpg'),

//   require('../../../assets/images/Gallery/img60.jpg'),
//   require('../../../assets/images/Gallery/img61.jpg'),
//   require('../../../assets/images/Gallery/img62.jpg'),
//   require('../../../assets/images/Gallery/img64.jpg'),
//   require('../../../assets/images/Gallery/img65.jpg'),
//   require('../../../assets/images/Gallery/img66.jpg'),
//   require('../../../assets/images/Gallery/img67.jpg'),
//   require('../../../assets/images/Gallery/img68.jpg'),
//   require('../../../assets/images/Gallery/img69.jpg'),

//   require('../../../assets/images/Gallery/img71.jpg'),
//   require('../../../assets/images/Gallery/img72.jpg'),
//   require('../../../assets/images/Gallery/img73.jpg'),
//   require('../../../assets/images/Gallery/img74.jpg'),
//   require('../../../assets/images/Gallery/img75.jpg'),
//   require('../../../assets/images/Gallery/img751.jpg'),
//   require('../../../assets/images/Gallery/img76.jpg'),
//   require('../../../assets/images/Gallery/img77.jpg'),
// ];

// export const getGalleryImages = async () => {
//   return images.map(img => {
//     const resolved = Image.resolveAssetSource(img);
//     return resolved.uri; // <-- this is what you want
//   });
// };

// export const getGalleryImages = async () => {
//   const results = [];

//   for (const img of images) {
//     const uri = await getBase64Image(img);
//     results.push(uri);
//   }

//   return results;
// };

// export const getGalleryImages = async () => {
//   console.log('Starting...');
//   const results = [];

//   for (const element of images) {
//     const r = await getBase64Image(element);
//     results.push(r);
//   }

//   console.log('All done');
//   return results;
// };

export const getGalleryImages = async () => {
  if (Platform.OS === 'android') {
    return [
      getPdfAssetUri('gallery/img1.jpg'),
      getPdfAssetUri('gallery/img3.jpg'),
      getPdfAssetUri('gallery/img4.jpg'),
      getPdfAssetUri('gallery/img5.jpg'),
      getPdfAssetUri('gallery/img6.jpg'),
      getPdfAssetUri('gallery/img7.jpg'),
      getPdfAssetUri('gallery/img8.jpg'),
      getPdfAssetUri('gallery/img9.jpg'),

      getPdfAssetUri('gallery/img10.jpg'),
      getPdfAssetUri('gallery/img11.jpg'),
      getPdfAssetUri('gallery/img12.jpg'),
      getPdfAssetUri('gallery/img13.jpg'),
      getPdfAssetUri('gallery/img14.jpg'),
      getPdfAssetUri('gallery/img15.jpg'),
      getPdfAssetUri('gallery/img16.jpg'),
      getPdfAssetUri('gallery/img161.jpg'),
      getPdfAssetUri('gallery/img17.jpg'),
      getPdfAssetUri('gallery/img18.jpg'),
      getPdfAssetUri('gallery/img181.jpg'),
      getPdfAssetUri('gallery/img19.jpg'),

      getPdfAssetUri('gallery/img20.jpg'),
      getPdfAssetUri('gallery/img21.jpg'),
      getPdfAssetUri('gallery/img22.jpg'),
      getPdfAssetUri('gallery/img23.jpg'),
      getPdfAssetUri('gallery/img25.jpg'),
      getPdfAssetUri('gallery/img26.jpg'),
      getPdfAssetUri('gallery/img27.jpg'),
      getPdfAssetUri('gallery/img271.jpg'),
      getPdfAssetUri('gallery/img28.jpg'),
      getPdfAssetUri('gallery/img29.jpg'),

      getPdfAssetUri('gallery/img30.jpg'),
      getPdfAssetUri('gallery/img31.jpg'),
      getPdfAssetUri('gallery/img32.jpg'),
      getPdfAssetUri('gallery/img34.jpg'),
      getPdfAssetUri('gallery/img35.jpg'),
      getPdfAssetUri('gallery/img36.jpg'),
      getPdfAssetUri('gallery/img37.jpg'),
      getPdfAssetUri('gallery/img38.jpg'),
      getPdfAssetUri('gallery/img39.jpg'),

      getPdfAssetUri('gallery/img40.jpg'),
      getPdfAssetUri('gallery/img41.jpg'),
      getPdfAssetUri('gallery/img410.jpg'),
      getPdfAssetUri('gallery/img411.jpg'),
      getPdfAssetUri('gallery/img42.jpg'),
      getPdfAssetUri('gallery/img43.jpg'),
      getPdfAssetUri('gallery/img44.jpg'),
      getPdfAssetUri('gallery/img441.jpg'),
      getPdfAssetUri('gallery/img45.jpg'),
      getPdfAssetUri('gallery/img46.jpg'),
      getPdfAssetUri('gallery/img47.jpg'),
      getPdfAssetUri('gallery/img471.jpg'),
      getPdfAssetUri('gallery/img48.jpg'),

      getPdfAssetUri('gallery/img52.jpg'),
      getPdfAssetUri('gallery/img53.jpg'),
      getPdfAssetUri('gallery/img54.jpg'),
      getPdfAssetUri('gallery/img55.jpg'),
      getPdfAssetUri('gallery/img56.jpg'),
      getPdfAssetUri('gallery/img57.jpg'),
      getPdfAssetUri('gallery/img58.jpg'),
      getPdfAssetUri('gallery/img59.jpg'),

      getPdfAssetUri('gallery/img60.jpg'),
      getPdfAssetUri('gallery/img61.jpg'),
      getPdfAssetUri('gallery/img62.jpg'),
      getPdfAssetUri('gallery/img64.jpg'),
      getPdfAssetUri('gallery/img65.jpg'),
      getPdfAssetUri('gallery/img66.jpg'),
      getPdfAssetUri('gallery/img67.jpg'),
      getPdfAssetUri('gallery/img68.jpg'),
      getPdfAssetUri('gallery/img69.jpg'),

      getPdfAssetUri('gallery/img71.jpg'),
      getPdfAssetUri('gallery/img72.jpg'),
      getPdfAssetUri('gallery/img73.jpg'),
      getPdfAssetUri('gallery/img74.jpg'),
      getPdfAssetUri('gallery/img75.jpg'),
      getPdfAssetUri('gallery/img751.jpg'),
      getPdfAssetUri('gallery/img76.jpg'),
      getPdfAssetUri('gallery/img77.jpg'),
    ];
  }

  // iOS: resolve from app bundle
  return [
    getPdfAssetUri(require('../../../assets/images/Gallery/img1.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img3.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img4.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img5.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img6.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img7.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img8.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img9.jpg')),

    getPdfAssetUri(require('../../../assets/images/Gallery/img10.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img11.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img12.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img13.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img14.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img15.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img16.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img161.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img17.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img18.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img181.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img19.jpg')),

    getPdfAssetUri(require('../../../assets/images/Gallery/img20.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img21.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img22.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img23.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img25.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img26.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img27.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img271.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img28.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img29.jpg')),

    getPdfAssetUri(require('../../../assets/images/Gallery/img30.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img31.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img32.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img34.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img35.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img36.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img37.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img38.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img39.jpg')),

    getPdfAssetUri(require('../../../assets/images/Gallery/img40.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img41.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img410.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img411.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img42.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img43.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img44.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img441.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img45.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img46.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img47.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img471.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img48.jpg')),

    getPdfAssetUri(require('../../../assets/images/Gallery/img52.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img53.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img54.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img55.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img56.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img57.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img58.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img59.jpg')),

    getPdfAssetUri(require('../../../assets/images/Gallery/img60.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img61.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img62.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img64.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img65.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img66.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img67.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img68.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img69.jpg')),

    getPdfAssetUri(require('../../../assets/images/Gallery/img71.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img72.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img73.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img74.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img75.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img751.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img76.jpg')),
    getPdfAssetUri(require('../../../assets/images/Gallery/img77.jpg')),
  ];
};
