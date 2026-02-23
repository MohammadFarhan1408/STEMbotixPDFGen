import React, { useMemo, useEffect } from 'react';
import { StyleSheet } from 'react-native';
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

const BaselineEndlineForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const baselineEndline = useReportStore(state => state.baselineEndline);
  const updateBaselineEndline = useReportStore(
    state => state.updateBaselineEndline,
  );

  const row = baselineEndline?.[0] || {
    parameter: '',
    baselineValue: 0,
    endlineValue: 0,
    percentChange: 0,
  };

  const { parameter, baselineValue, endlineValue, percentChange } = row;

  // Calculate %
  const calculatedPercent = useMemo(() => {
    const base = parseFloat(baselineValue) || 0;
    const end = parseFloat(endlineValue) || 0;
    if (base === 0) return 0;
    return Number((((end - base) / base) * 100).toFixed(2));
  }, [baselineValue, endlineValue]);

  // Sync calculated % into store
  useEffect(() => {
    if (calculatedPercent !== percentChange) {
      updateBaselineEndline(0, 'percentChange', calculatedPercent);
    }
  }, [calculatedPercent, percentChange, updateBaselineEndline]);

  const handleFieldChange = (field, value) => {
    updateBaselineEndline(0, field, value);
  };

  const { errors, handleSubmit } = useForm({
    data: row,
    updateField: (field, value) => updateBaselineEndline(0, field, value),
    requiredFields: ['parameter', 'baselineValue', 'endlineValue'],
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Baseline & Endline" />

        {/* Parameter */}
        <Input
          label="Parameter"
          value={parameter}
          placeholder="Enter parameter"
          error={errors.parameter}
          onChangeText={text => handleFieldChange('parameter', text)}
          maxLength={45}
        />

        {/* Baseline Value */}
        <Input
          label="Baseline Value"
          value={String(baselineValue)}
          placeholder="0"
          error={errors.baselineValue}
          onChangeText={text =>
            handleFieldChange('baselineValue', Number(text) || 0)
          }
          keyboardType="numeric"
        />

        {/* Endline Value */}
        <Input
          label="Endline Value"
          value={String(endlineValue)}
          placeholder="0"
          error={errors.endlineValue}
          onChangeText={text =>
            handleFieldChange('endlineValue', Number(text) || 0)
          }
          keyboardType="numeric"
        />

        {/* Percent Change (Read-only) */}
        <Input
          label="% Change"
          value={String(calculatedPercent)}
          editable={false}
          inputStyle={styles.readonly}
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

export default BaselineEndlineForm;

const styles = StyleSheet.create({
  readonly: {
    backgroundColor: '#f3f4f6',
  },
});
