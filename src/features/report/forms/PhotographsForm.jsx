import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useReportStore } from '@/store/reportStore';

// Form handling hook
import { useForm } from '@/hooks/useFormHandlers';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import ImageUploadField from '@/components/ui/ImageUploadField';
import ButtonGroup from '@/components/ui/ButtonGroup';

const PhotographsForm = ({ prevStep, isLastStep, generatePDF }) => {
  const photographs = useReportStore(state => state.photographs);
  const setPhotographs = useReportStore(state => state.setPhotographs);

  const { errors, handleSubmit: defaultSubmit } = useForm({
    isLastStep,
    nextStep: () => {},
    generatePDF,
  });

  const handleSubmit = () => {
    if (!photographs || photographs.length === 0) {
      Alert.alert('Validation', 'Please upload at least one photograph.');
      return;
    }
    // navigation handled by hook (only generates PDF since no nextStep passed)
    defaultSubmit();
  };

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Photographs" />
        <ImageUploadField
          label="Photographs"
          value={photographs}
          required
          error={errors.photographs}
          onChange={setPhotographs}
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

export default PhotographsForm;
