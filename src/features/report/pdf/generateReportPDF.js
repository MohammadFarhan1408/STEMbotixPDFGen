import RNPrint from 'react-native-print';
import ReportDocumentHTML from './ReportDocumentHTML';
import { Alert } from 'react-native';

const generateReportPDF = async reportData => {
  try {
    const html = await ReportDocumentHTML(reportData);
    const result = await RNPrint.print({ html });

    return result;
  } catch (error) {
    Alert.alert('PDF error', error.message || error);
    console.error('PDF Generation Error:', error);
    throw error;
  }
};

export default generateReportPDF;
