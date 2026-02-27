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
import ButtonGroup from '@/components/ui/ButtonGroup';

const SchoolDeliveryForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const schoolDelivery = useDeliveryStore(state => state.schoolDelivery);
  const updateSchoolDelivery = useDeliveryStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: schoolDelivery,
    updateField: (field, value) =>
      updateSchoolDelivery('schoolDelivery', field, value),
    requiredFields: [
      'schoolName',
      'schoolAddress',
      'deliveredAndInstalledBy',
      'deliveredByContactNo',
      'receivedBy',
      'receivedByContactNo',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="School Delivery Information" />

        <Input
          label="School Name"
          fieldName="schoolName"
          value={schoolDelivery.schoolName}
          placeholder="Enter School Name"
          error={errors.schoolName}
          onChangeText={text => handleChange('schoolName', text)}
        />

        <Input
          label="School Address"
          fieldName="schoolAddress"
          value={schoolDelivery.schoolAddress}
          placeholder="Enter School Address"
          error={errors.schoolAddress}
          onChangeText={text => handleChange('schoolAddress', text)}
        />

        <Input
          label="Delivered & Installed By"
          fieldName="deliveredAndInstalledBy"
          value={schoolDelivery.deliveredAndInstalledBy}
          placeholder="Enter Delivered & Installed By"
          error={errors.deliveredAndInstalledBy}
          onChangeText={text => handleChange('deliveredAndInstalledBy', text)}
        />

        <Input
          label="Delivered By Contact No"
          fieldName="deliveredByContactNo"
          keyboardType="numeric"
          minLength={10}
          maxLength={10}
          value={schoolDelivery.deliveredByContactNo}
          placeholder="Enter Delivered & Installed By"
          error={errors.deliveredByContactNo}
          onChangeText={text => handleChange('deliveredByContactNo', text)}
        />

        <Input
          label="Received By"
          fieldName="receivedBy"
          value={schoolDelivery.receivedBy}
          placeholder="Enter Received By"
          error={errors.receivedBy}
          onChangeText={text => handleChange('receivedBy', text)}
        />

        <Input
          label="Received By Contact No"
          fieldName="receivedByContactNo"
          keyboardType="numeric"
          minLength={10}
          maxLength={10}
          value={schoolDelivery.receivedByContactNo}
          placeholder="Enter Received By Contact No"
          error={errors.receivedByContactNo}
          onChangeText={text => handleChange('receivedByContactNo', text)}
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

export default SchoolDeliveryForm;
