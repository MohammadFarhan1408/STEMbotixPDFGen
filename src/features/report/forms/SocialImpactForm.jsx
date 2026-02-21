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

const SocialImpactForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const socialImpact = useReportStore(state => state.socialImpact);

  const updateSocialImpact = useReportStore(state => state.updateSectionField);

  const { errors, handleChange, handleSubmit } = useForm({
    data: socialImpact,
    updateField: (field, value) =>
      updateSocialImpact('socialImpact', field, value),
    requiredFields: [
      'inclusionAndEquity',
      'communityEngagement',
      'awarenessPrograms',
      'digitalDivideReduction',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Social Impact" />

        {/* Inclusion & Equity */}
        <Input
          label="Inclusion & Equity"
          value={socialImpact.inclusionAndEquity}
          placeholder="Describe inclusion and equity impact..."
          maxLength={80}
          error={errors.inclusionAndEquity}
          onChangeText={text => handleChange('inclusionAndEquity', text)}
        />

        {/* Community Engagement */}
        <Input
          label="Community Engagement"
          value={socialImpact.communityEngagement}
          placeholder="Describe community participation or outreach..."
          maxLength={80}
          error={errors.communityEngagement}
          onChangeText={text => handleChange('communityEngagement', text)}
        />

        {/* Awareness Programs */}
        <Input
          label="Awareness Programs"
          value={socialImpact.awarenessPrograms}
          placeholder="Mention campaigns, workshops, or seminars..."
          multiline
          numberOfLines={3}
          maxLength={120}
          error={errors.awarenessPrograms}
          onChangeText={text => handleChange('awarenessPrograms', text)}
        />

        {/* Digital Divide Reduction */}
        <Input
          label="Digital Divide Reduction"
          value={socialImpact.digitalDivideReduction}
          placeholder="Explain how digital access improved..."
          multiline
          maxLength={120}
          numberOfLines={3}
          error={errors.digitalDivideReduction}
          onChangeText={text => handleChange('digitalDivideReduction', text)}
        />

        {/* Buttons */}
        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleSubmit}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default SocialImpactForm;
