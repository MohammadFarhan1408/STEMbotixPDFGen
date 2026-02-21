import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useReportStore } from '@/store/reportStore';

// Form handling hook
import { useForm } from '@/hooks/useFormHandlers';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Input from '@/components/ui/Input';
import DateField from '@/components/ui/DateField';
import ButtonGroup from '@/components/ui/ButtonGroup';

const ObjectivesForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const objectives = useReportStore(state => state.objectives);
  const updateObjectives = useReportStore(state => state.updateSectionField);

  const { errors, handleChange, handleSubmit } = useForm({
    data: objectives,
    updateField: (field, value) => updateObjectives('objectives', field, value),
    requiredFields: [
      'primaryObjectives',
      'secondaryObjectives',
      'shortTermOutcomes',
      'longTermOutcomes',
      'sdgAlignment',
    ],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Objectives" />

        {/* Primary Objectives */}
        <Input
          label="Primary Objectives"
          value={objectives.primaryObjectives}
          placeholder="Enter primary objectives..."
          error={errors.primaryObjectives}
          onChangeText={text => handleChange('primaryObjectives', text)}
          multiline
          numberOfLines={3}
          maxLength={250}
        />

        {/* Secondary Objectives */}
        <Input
          label="Secondary Objectives"
          value={objectives.secondaryObjectives}
          placeholder="Enter secondary objectives..."
          error={errors.secondaryObjectives}
          onChangeText={text => handleChange('secondaryObjectives', text)}
          multiline
          numberOfLines={3}
          maxLength={250}
        />

        {/* Short-term Outcomes */}
        <Input
          label="Short-term Outcomes"
          value={objectives.shortTermOutcomes}
          placeholder="Describe short-term outcomes..."
          error={errors.shortTermOutcomes}
          onChangeText={text => handleChange('shortTermOutcomes', text)}
          multiline
          numberOfLines={3}
          maxLength={190}
        />

        {/* Long-term Outcomes */}
        <Input
          label="Long-term Outcomes"
          value={objectives.longTermOutcomes}
          placeholder="Describe long-term outcomes..."
          error={errors.longTermOutcomes}
          onChangeText={text => handleChange('longTermOutcomes', text)}
          multiline
          numberOfLines={3}
          maxLength={190}
        />

        {/* SDG Alignment */}
        <Input
          label="SDG Alignment"
          value={objectives.sdgAlignment}
          placeholder="e.g. SDG 4 - Quality Education"
          error={errors.sdgAlignment}
          onChangeText={text => handleChange('sdgAlignment', text)}
          maxLength={100}
        />

        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleSubmit}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default ObjectivesForm;
