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

const InnovationImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const innovationImpact = useReportStore(state => state.innovationImpact);

  const updateInnovationImpact = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: innovationImpact,
    updateField: (field, value) =>
      updateInnovationImpact('innovationImpact', field, value),
    requiredFields: ['newTechnologies', 'innovationProjects', 'research'],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Innovation Impact" />

        {/* New Technologies */}
        <Input
          label="New Technologies Introduced"
          value={innovationImpact.newTechnologies}
          placeholder="Describe new technologies..."
          error={errors.newTechnologies}
          onChangeText={text => handleChange('newTechnologies', text)}
          multiline
          numberOfLines={4}
          maxLength={200}
        />

        {/* Innovation Projects */}
        <Input
          label="Innovation Projects"
          value={innovationImpact.innovationProjects}
          placeholder="Describe innovation projects..."
          error={errors.innovationProjects}
          onChangeText={text => handleChange('innovationProjects', text)}
          multiline
          numberOfLines={4}
          maxLength={200}
        />

        {/* Research */}
        <Input
          label="Research & Development"
          value={innovationImpact.research}
          placeholder="Describe research activities..."
          error={errors.research}
          onChangeText={text => handleChange('research', text)}
          multiline
          numberOfLines={4}
          maxLength={200}
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

export default InnovationImpactForm;
