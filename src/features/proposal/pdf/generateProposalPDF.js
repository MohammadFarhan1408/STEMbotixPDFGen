import RNPrint from 'react-native-print';
import ProposalDocumentHTML from './ProposalDocumentHTML';
import { Alert } from 'react-native';

const generateProposalPDF = async proposalData => {
  try {
    const html = await ProposalDocumentHTML(proposalData);
    const result = await RNPrint.print({ html });

    return result;
  } catch (error) {
    Alert.alert('PDF error', error.message || error);
    console.error('PDF Generation Error:', error);
    throw error;
  }
};

export default generateProposalPDF;
