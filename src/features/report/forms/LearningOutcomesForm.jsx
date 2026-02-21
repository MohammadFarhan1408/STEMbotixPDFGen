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

const LearningOutcomesForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const learningOutcomes = useReportStore(state => state.learningOutcomes);

  const updateLearningOutcomes = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: learningOutcomes,
    updateField: (field, value) =>
      updateLearningOutcomes('learningOutcomes', field, value),
    requiredFields: [
      'technicalSkillsGained',
      'softSkillsDeveloped',
      'toolsPlatformsUsed',
      'handsOnLearningHours',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Learning & Skill Outcomes" />

        {/* Technical Skills */}
        <Input
          label="Technical Skills Gained"
          value={learningOutcomes.technicalSkillsGained}
          placeholder="e.g. Robotics, Augmented Reality, Python Programming..."
          error={errors.technicalSkillsGained}
          onChangeText={text => handleChange('technicalSkillsGained', text)}
          multiline
          numberOfLines={3}
          maxLength={250}
        />

        {/* Soft Skills */}
        <Input
          label="Soft Skills Developed"
          value={learningOutcomes.softSkillsDeveloped}
          placeholder="e.g. Critical Thinking, Teamwork, Problem Solving..."
          error={errors.softSkillsDeveloped}
          onChangeText={text => handleChange('softSkillsDeveloped', text)}
          maxLength={100}
        />

        {/* Tools / Platforms */}
        <Input
          label="Tools / Platforms Used"
          value={learningOutcomes.toolsPlatformsUsed}
          placeholder="e.g. AR-based Phygital toys, STEM Kits"
          error={errors.toolsPlatformsUsed}
          onChangeText={text => handleChange('toolsPlatformsUsed', text)}
          maxLength={80}
        />

        {/* Hands-on Learning Hours */}
        <Input
          label="Hands-on Learning Hours"
          value={String(learningOutcomes.handsOnLearningHours)}
          placeholder="Enter hours"
          error={errors.handsOnLearningHours}
          onChangeText={text =>
            handleChange('handsOnLearningHours', Number(text) || 0)
          }
          keyboardType="numeric"
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

export default LearningOutcomesForm;
