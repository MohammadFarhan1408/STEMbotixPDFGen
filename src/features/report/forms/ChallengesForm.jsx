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

const ChallengesForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const challengesAndLearnings = useReportStore(
    state => state.challengesAndLearnings,
  );

  const updateChallengesAndLearnings = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: challengesAndLearnings,
    updateField: (field, value) =>
      updateChallengesAndLearnings('challengesAndLearnings', field, value),
    requiredFields: ['keyChallenges', 'mitigationStrategies', 'lessonsLearned'],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Challenges & Learnings" />

        {/* Key Challenges */}
        <Input
          label="Key Challenges"
          value={challengesAndLearnings.keyChallenges}
          error={errors.keyChallenges}
          onChangeText={text => handleChange('keyChallenges', text)}
          multiline
          numberOfLines={4}
          maxLength={210}
        />

        {/* Mitigation Strategies */}
        <Input
          label="Mitigation Strategies"
          value={challengesAndLearnings.mitigationStrategies}
          error={errors.mitigationStrategies}
          onChangeText={text => handleChange('mitigationStrategies', text)}
          multiline
          numberOfLines={4}
          maxLength={210}
        />

        {/* Lessons Learned */}
        <Input
          label="Lessons Learned"
          value={challengesAndLearnings.lessonsLearned}
          error={errors.lessonsLearned}
          onChangeText={text => handleChange('lessonsLearned', text)}
          multiline
          numberOfLines={4}
          maxLength={175}
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

export default ChallengesForm;
