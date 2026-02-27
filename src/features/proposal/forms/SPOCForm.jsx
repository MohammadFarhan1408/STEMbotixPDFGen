import React from 'react';
import { useProposalStore } from '@/store/proposalStore';
// shared form helper
import { useForm } from '@/hooks/useFormHandlers';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Input from '@/components/ui/Input';
import ButtonGroup from '@/components/ui/ButtonGroup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SPOCForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
  isGenerating = false,
}) => {
  const spoc = useProposalStore(state => state.spoc);
  const { name, designation, email, phone } = useProposalStore(
    state => state.spoc,
  );

  const updateSPOC = useProposalStore(state => state.updateSectionField);

  const { errors, handleChange, handleSubmit } = useForm({
    data: spoc,
    updateField: (field, value) => updateSPOC('spoc', field, value),
    requiredFields: ['name', 'designation', 'email', 'phone'],
    isLastStep,
    nextStep,
    generatePDF,
    extraValidate: data => {
      if (!emailRegex.test(data.email)) {
        return {
          email: 'Please enter a valid email address.',
        };
      }
    },
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="SPOC" />

        <Input
          label="Name"
          value={name}
          placeholder="Enter Name"
          error={errors.name}
          onChangeText={text => handleChange('name', text)}
        />

        <Input
          label="Designation"
          value={designation}
          placeholder="Enter Designation"
          maxLength={150}
          error={errors.designation}
          onChangeText={text => handleChange('designation', text)}
        />

        <Input
          label="Email"
          value={email}
          placeholder="Enter Email"
          keyboardType="email-address"
          error={errors.email}
          autoCapitalize="none"
          onChangeText={text => handleChange('email', text)}
        />

        <Input
          label="Phone"
          value={phone}
          placeholder="Enter Phone"
          maxLength={10}
          keyboardType="numeric"
          error={errors.phone}
          onChangeText={text => handleChange('phone', text)}
        />

        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleSubmit}
          isGenerating={isGenerating}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default SPOCForm;
