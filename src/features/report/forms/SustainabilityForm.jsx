import React from 'react';
import { View, Text } from 'react-native';
import { useReportStore } from '@/store/reportStore';

// Form handling hook
import { useForm } from '@/hooks/useFormHandlers';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Input from '@/components/ui/Input';
import ButtonGroup from '@/components/ui/ButtonGroup';

const SustainabilityForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const sustainability = useReportStore(state => state.sustainability);

  const updateSustainability = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: sustainability,
    updateField: (field, value) =>
      updateSustainability('sustainability', field, value),
    requiredFields: [
      'continuationPlan',
      'scalabilityPotential',
      'replicationPossibilities',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Sustainability" />

        {/* Continuation Plan */}
        <Input
          label="Continuation Plan"
          value={sustainability.continuationPlan}
          error={errors.continuationPlan}
          onChangeText={text => handleChange('continuationPlan', text)}
          multiline
          numberOfLines={3}
          maxLength={225}
        />

        {/* Scalability Potential */}
        <Input
          label="Scalability Potential"
          value={sustainability.scalabilityPotential}
          error={errors.scalabilityPotential}
          onChangeText={text => handleChange('scalabilityPotential', text)}
          multiline
          numberOfLines={3}
          maxLength={225}
        />

        {/* Replication Possibilities */}
        <Input
          label="Replication Possibilities"
          value={sustainability.replicationPossibilities}
          error={errors.replicationPossibilities}
          onChangeText={text => handleChange('replicationPossibilities', text)}
          multiline
          numberOfLines={3}
          maxLength={190}
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

export default SustainabilityForm;
