import Stepper from '@/components/navigation/Stepper';
import { deliverySteps } from './config/steps';
import { useDeliveryStore } from '@/store/deliveryStore';
import generateDeliveryPDF from './pdf/generateDeliveryPDF';

const DeliveryScreen = () => {
  return (
    <Stepper
      steps={deliverySteps}
      useStore={useDeliveryStore}
      onGeneratePDF={generateDeliveryPDF}
    />
  );
};

export default DeliveryScreen;
