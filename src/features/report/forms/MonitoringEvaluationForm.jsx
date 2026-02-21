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

const MonitoringEvaluationForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const monitoringEvaluation = useReportStore(
    state => state.monitoringEvaluation,
  );

  const updateMonitoringEvaluation = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: monitoringEvaluation,
    updateField: (field, value) =>
      updateMonitoringEvaluation('monitoringEvaluation', field, value),
    requiredFields: [
      'dataCollectionTools',
      'assessmentMethods',
      'monitoringFrequency',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Monitoring & Evaluation" />

        {/* Data Collection Tools */}
        <Input
          label="Data Collection Tools"
          value={monitoringEvaluation.dataCollectionTools}
          error={errors.dataCollectionTools}
          placeholder="e.g. Surveys, Interviews, Observation Sheets..."
          onChangeText={text => handleChange('dataCollectionTools', text)}
          multiline
          numberOfLines={3}
          maxLength={180}
        />

        {/* Assessment Methods */}
        <Input
          label="Assessment Methods"
          value={monitoringEvaluation.assessmentMethods}
          error={errors.assessmentMethods}
          placeholder="e.g. Pre/Post Tests, Practical Evaluations..."
          onChangeText={text => handleChange('assessmentMethods', text)}
          multiline
          numberOfLines={3}
          maxLength={180}
        />

        {/* Monitoring Frequency */}
        <Input
          label="Monitoring Frequency"
          value={monitoringEvaluation.monitoringFrequency}
          error={errors.monitoringFrequency}
          placeholder="e.g. Weekly, Monthly, Quarterly..."
          onChangeText={text => handleChange('monitoringFrequency', text)}
          multiline
          numberOfLines={2}
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

export default MonitoringEvaluationForm;
