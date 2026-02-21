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

const InstitutionalImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const institutionalImpact = useReportStore(
    state => state.institutionalImpact,
  );

  const updateInstitutionalImpact = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: institutionalImpact,
    updateField: (field, value) =>
      updateInstitutionalImpact('institutionalImpact', field, value),
    requiredFields: [
      'teacherCapacityBuilding',
      'infrastructureUse',
      'curriculumEnhancement',
      'sustainabilityMeasures',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Institutional Impact" />

        {/* Teacher Capacity Building */}
        <Input
          label="Teacher Capacity Building"
          value={institutionalImpact.teacherCapacityBuilding}
          placeholder="Describe teacher training and capacity building..."
          error={errors.teacherCapacityBuilding}
          onChangeText={text => handleChange('teacherCapacityBuilding', text)}
          multiline
          numberOfLines={4}
          maxLength={200}
        />

        {/* Infrastructure Use */}
        <Input
          label="Infrastructure Use"
          value={institutionalImpact.infrastructureUse}
          placeholder="Describe infrastructure utilization..."
          error={errors.infrastructureUse}
          onChangeText={text => handleChange('infrastructureUse', text)}
          multiline
          numberOfLines={4}
          maxLength={200}
        />

        {/* Curriculum Enhancement */}
        <Input
          label="Curriculum Enhancement"
          value={institutionalImpact.curriculumEnhancement}
          placeholder="Describe curriculum improvements..."
          error={errors.curriculumEnhancement}
          onChangeText={text => handleChange('curriculumEnhancement', text)}
          multiline
          numberOfLines={4}
          maxLength={200}
        />

        {/* Sustainability Measures */}
        <Input
          label="Sustainability Measures"
          value={institutionalImpact.sustainabilityMeasures}
          placeholder="Describe sustainability measures..."
          error={errors.sustainabilityMeasures}
          onChangeText={text => handleChange('sustainabilityMeasures', text)}
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

export default InstitutionalImpactForm;
