import Stepper from '@/components/navigation/Stepper';
import { proposalSteps } from './config/steps';
import { useProposalStore } from '@/store/proposalStore';
import generateProposalPDF from './pdf/generateProposalPDF';

const ProposalScreen = () => {
  return (
    <Stepper
      steps={proposalSteps}
      useStore={useProposalStore}
      onGeneratePDF={generateProposalPDF}
    />
  );
};

export default ProposalScreen;
