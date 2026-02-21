import Stepper from '@/components/navigation/Stepper';
import { reportSteps } from './config/steps';
import { useReportStore } from '@/store/reportStore';
import generateReportPDF from './pdf/generateReportPDF';

const ReportScreen = () => {
  return (
    <Stepper
      steps={reportSteps}
      useStore={useReportStore}
      onGeneratePDF={generateReportPDF}
    />
  );
};

export default ReportScreen;
