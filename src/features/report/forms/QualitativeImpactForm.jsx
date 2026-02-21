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
import SelectInput from '@/components/ui/SelectInput';
import RangeSlider from '@/components/ui/RangeSlider';
import ButtonGroup from '@/components/ui/ButtonGroup';

const QualitativeImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const qualitativeImpact = useReportStore(state => state.qualitativeImpact);

  const updateQualitativeImpact = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: qualitativeImpact,
    updateField: (field, value) =>
      updateQualitativeImpact('qualitativeImpact', field, value),
    requiredFields: [
      'confidenceImprovement',
      'leadershipSkills',
      'teamwork',
      'criticalThinking',
      'testimonials',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Qualitative Impact" />

        {/* Confidence Slider */}
        <RangeSlider
          label={`Confidence Growth: ${
            qualitativeImpact.confidenceImprovement || 1
          }`}
          value={Number(qualitativeImpact.confidenceImprovement) || 1}
          onValueChange={val =>
            handleChange('confidenceImprovement', String(val))
          }
          minimumValue={1}
          maximumValue={10}
          step={1}
        />

        {/* Leadership Picker */}
        <SelectInput
          label="Leadership Development"
          value={qualitativeImpact.leadershipSkills}
          onValueChange={value => handleChange('leadershipSkills', value)}
          items={[
            { label: 'Beginner', value: 'beginner' },
            { label: 'Developing', value: 'developing' },
            { label: 'Proficient', value: 'proficient' },
            { label: 'Advanced', value: 'advanced' },
          ]}
        />

        {/* Teamwork Picker */}
        <SelectInput
          label="Collaboration & Team Participation"
          value={qualitativeImpact.teamwork}
          onValueChange={value => handleChange('teamwork', value)}
          items={[
            { label: 'Poor', value: 'poor' },
            { label: 'Fair', value: 'fair' },
            { label: 'Good', value: 'good' },
            { label: 'Excellent', value: 'excellent' },
          ]}
        />

        {/* Critical Thinking Slider */}
        <RangeSlider
          label={`Critical Thinking: ${
            qualitativeImpact.criticalThinking || 1
          }`}
          value={Number(qualitativeImpact.criticalThinking) || 1}
          onValueChange={val => handleChange('criticalThinking', String(val))}
          minimumValue={1}
          maximumValue={10}
          step={1}
        />

        {/* Testimonials */}
        <Input
          label="Participant / Mentor Feedback"
          value={qualitativeImpact.testimonials || ''}
          onChangeText={text => handleChange('testimonials', text)}
          maxLength={200}
          multiline
          numberOfLines={4}
          placeholder="Write feedback or testimonial..."
          error={errors.testimonials}
        />

        {/* Navigation Button */}
        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleSubmit}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default QualitativeImpactForm;
