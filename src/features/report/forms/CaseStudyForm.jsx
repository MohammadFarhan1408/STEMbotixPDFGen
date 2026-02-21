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

const CaseStudyForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const caseStudy = useReportStore(state => state.caseStudy);
  const updateCaseStudy = useReportStore(state => state.updateSectionField);

  const { errors, handleChange, handleSubmit } = useForm({
    data: caseStudy,
    updateField: (field, value) => updateCaseStudy('caseStudy', field, value),
    requiredFields: [
      'beneficiaryBackground',
      'interventionDetails',
      'outcomeAchieved',
      'testimonial',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Case Study" />

        {/* Beneficiary Background */}
        <Input
          label="Beneficiary Background"
          value={caseStudy.beneficiaryBackground}
          placeholder="Enter beneficiary background..."
          error={errors.beneficiaryBackground}
          onChangeText={text => handleChange('beneficiaryBackground', text)}
          multiline
          numberOfLines={4}
          maxLength={225}
        />

        {/* Intervention Details */}
        <Input
          label="Intervention Details"
          value={caseStudy.interventionDetails}
          placeholder="Describe intervention..."
          error={errors.interventionDetails}
          onChangeText={text => handleChange('interventionDetails', text)}
          multiline
          numberOfLines={4}
          maxLength={225}
        />

        {/* Outcome Achieved */}
        <Input
          label="Outcome Achieved"
          value={caseStudy.outcomeAchieved}
          placeholder="Enter outcomes..."
          error={errors.outcomeAchieved}
          onChangeText={text => handleChange('outcomeAchieved', text)}
          multiline
          numberOfLines={4}
          maxLength={200}
        />

        {/* Testimonial */}
        <Input
          label="Testimonial"
          value={caseStudy.testimonial}
          placeholder="Enter testimonial..."
          error={errors.testimonial}
          onChangeText={text => handleChange('testimonial', text)}
          multiline
          numberOfLines={4}
          maxLength={250}
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

export default CaseStudyForm;
