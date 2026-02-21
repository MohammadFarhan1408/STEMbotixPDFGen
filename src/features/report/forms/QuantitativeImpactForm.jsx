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

const QuantitativeImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const quantitativeImpact = useReportStore(state => state.quantitativeImpact);

  const updateQuantitativeImpact = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: quantitativeImpact,
    updateField: (field, value) =>
      updateQuantitativeImpact('quantitativeImpact', field, value),
    requiredFields: [
      'participantsTrained',
      'certificationsAchieved',
      'attendanceRate',
      'completionRate',
      'assessmentImprovement',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Quantitative Impact" />

        {/* Participants */}
        <Input
          label="Number of Participants Trained"
          value={quantitativeImpact.participantsTrained}
          placeholder="0"
          error={errors.participantsTrained}
          onChangeText={text =>
            handleChange('participantsTrained', Number(text) || 0)
          }
          keyboardType="numeric"
        />

        {/* Certifications */}
        <Input
          label="Certifications Achieved"
          value={quantitativeImpact.certificationsAchieved}
          placeholder="0"
          error={errors.certificationsAchieved}
          onChangeText={text =>
            handleChange('certificationsAchieved', Number(text) || 0)
          }
          keyboardType="numeric"
        />

        {/* Attendance */}
        <Input
          label="Attendance / Retention Rate (%)"
          value={quantitativeImpact.attendanceRate}
          placeholder="0"
          error={errors.attendanceRate}
          onChangeText={text =>
            handleChange('attendanceRate', Number(text) || 0)
          }
          keyboardType="numeric"
        />

        {/* Completion */}
        <Input
          label="Completion Rate (%)"
          value={quantitativeImpact.completionRate}
          placeholder="0"
          error={errors.completionRate}
          onChangeText={text =>
            handleChange('completionRate', Number(text) || 0)
          }
          keyboardType="numeric"
        />

        {/* Assessment Improvement */}
        <Input
          label="Improvement in Assessment Scores (%)"
          value={quantitativeImpact.assessmentImprovement}
          placeholder="0"
          error={errors.assessmentImprovement}
          onChangeText={text =>
            handleChange('assessmentImprovement', Number(text) || 0)
          }
          keyboardType="numeric"
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

export default QuantitativeImpactForm;
