import RNPrint from 'react-native-print';
import DeliveryDocumentHTML from './DeliveryDocumentHTML';
import { Alert } from 'react-native';

const generateDeliveryPDF = async (deliveryData, items) => {
  try {
    const html = await DeliveryDocumentHTML(deliveryData, items);
    const result = await RNPrint.print({ html });

    return result;
  } catch (error) {
    Alert.alert('PDF error', error.message || error);
    console.error('PDF Generation Error:', error);
    throw error;
  }
};

export default generateDeliveryPDF;
