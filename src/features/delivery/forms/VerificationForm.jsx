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

const VerificationForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const verification = useDeliveryStore(state => state.verification);
  const updateVerification = useDeliveryStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: verification,
    updateField: (field, value) =>
      updateVerification('verification', field, value),
    requiredFields: [
      'schoolAuthorityName',
      'schoolAuthorityDesignation',
      'stembotixRepresentativeName',
      'yuvaCoordinatorName',
      'verificationDate',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Verification and Authorization" />
        <Input
          label="School Authority Name"
          fieldName="schoolAuthorityName"
          value={verification.schoolAuthorityName}
          placeholder="Enter Authority Name"
          error={errors.schoolAuthorityName}
          onChangeText={text => handleChange('schoolAuthorityName', text)}
        />

        <Input
          label="School Authority Designation"
          fieldName="schoolAuthorityDesignation"
          value={verification.schoolAuthorityDesignation}
          placeholder="Enter Authority Designation"
          error={errors.schoolAuthorityDesignation}
          onChangeText={text =>
            handleChange('schoolAuthorityDesignation', text)
          }
        />

        <Input
          label="Stembotix Representative Name"
          fieldName="stembotixRepresentativeName"
          value={verification.stembotixRepresentativeName}
          placeholder="Enter Representative Name"
          error={errors.stembotixRepresentativeName}
          onChangeText={text =>
            handleChange('stembotixRepresentativeName', text)
          }
        />

        <Input
          label="Yuva Coordinator Name"
          fieldName="yuvaCoordinatorName"
          value={verification.yuvaCoordinatorName}
          placeholder="Enter Coordinator Name"
          error={errors.yuvaCoordinatorName}
          onChangeText={text => handleChange('yuvaCoordinatorName', text)}
        />

        <DateField
          label="Verification Date"
          fieldName="verificationDate"
          value={verification.verificationDate}
          placeholder="Select date"
          error={errors.verificationDate}
          onChange={date => handleChange('verificationDate', date)}
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

export default VerificationForm;
