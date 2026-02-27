import React from 'react';
import { useDeliveryStore } from '@/store/deliveryStore';

// Form handling hook
import { useForm } from '@/hooks/useFormHandlers';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Input from '@/components/ui/Input';
import DateField from '@/components/ui/DateField';
import ButtonGroup from '@/components/ui/ButtonGroup';

const DeliveryBasicInfoForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const deliveryBasicInfo = useDeliveryStore(state => state.deliveryBasicInfo);
  const updateDeliveryBasicInfo = useDeliveryStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: deliveryBasicInfo,
    updateField: (field, value) =>
      updateDeliveryBasicInfo('deliveryBasicInfo', field, value),
    requiredFields: [
      'date',
      'subject',
      'purchaseOrderNo',
      'purchaseOrderDate',
      'projectName',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Delivery Basic Info" />

        <DateField
          label="Date"
          fieldName="date"
          value={deliveryBasicInfo.date}
          placeholder="Select date"
          error={errors.date}
          onChange={date => handleChange('date', date)}
        />

        <Input
          label="Subject"
          fieldName="subject"
          value={deliveryBasicInfo.subject}
          placeholder="Describe Subject..."
          error={errors.subject}
          onChangeText={text => handleChange('subject', text)}
        />
        <Input
          label="Purchase Order No"
          fieldName="purchaseOrderNo"
          value={deliveryBasicInfo.purchaseOrderNo}
          keyboardType="numeric"
          placeholder="Purchase Order No"
          error={errors.purchaseOrderNo}
          onChangeText={text => handleChange('purchaseOrderNo', text)}
        />
        <DateField
          label="Purchase Order Date"
          fieldName="purchaseOrderDate"
          value={deliveryBasicInfo.purchaseOrderDate}
          placeholder="Select Purchase date"
          error={errors.purchaseOrderDate}
          onChange={date => handleChange('purchaseOrderDate', date)}
        />
        <Input
          label="Project Name"
          fieldName="projectName"
          value={deliveryBasicInfo.projectName}
          placeholder="Enter Project Name"
          error={errors.projectName}
          onChangeText={text => handleChange('projectName', text)}
          maxLength={150}
        />

        {/* Navigation Buttons */}
        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleSubmit}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default DeliveryBasicInfoForm;
