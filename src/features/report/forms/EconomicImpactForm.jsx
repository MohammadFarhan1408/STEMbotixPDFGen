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

const EconomicImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const economicImpact = useReportStore(state => state.economicImpact);

  const updateEconomicImpact = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: economicImpact,
    updateField: (field, value) =>
      updateEconomicImpact('economicImpact', field, value),
    isLastStep,
    nextStep,
    generatePDF,
  });

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Economic Impact (Optional)" />

        {/* Employability Enhancement */}
        <Input
          label="Employability Enhancement"
          value={economicImpact.employabilityEnhancement}
          placeholder="Describe employability improvements..."
          error={errors.employabilityEnhancement}
          onChangeText={text => handleChange('employabilityEnhancement', text)}
          multiline
          numberOfLines={4}
          maxLength={200}
        />

        {/* Income Opportunities */}
        <Input
          label="Income Opportunities"
          value={economicImpact.incomeOpportunities}
          placeholder="Describe income opportunities..."
          error={errors.incomeOpportunities}
          onChangeText={text => handleChange('incomeOpportunities', text)}
          multiline
          numberOfLines={4}
          maxLength={200}
        />

        {/* Cost Per Beneficiary */}
        <Input
          label="Cost Per Beneficiary"
          value={
            economicImpact.costPerBeneficiary === ''
              ? ''
              : String(economicImpact.costPerBeneficiary)
          }
          placeholder="Enter amount"
          keyboardType="numeric"
          error={errors.costPerBeneficiary}
          onChangeText={text =>
            handleChange('costPerBeneficiary', text === '' ? '' : text)
          }
        />

        {/* ROI */}
        <Input
          label="Return on Investment (%)"
          value={economicImpact.roi === '' ? '' : String(economicImpact.roi)}
          placeholder="Enter ROI %"
          keyboardType="numeric"
          error={errors.roi}
          onChangeText={text => handleChange('roi', text === '' ? '' : text)}
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

export default EconomicImpactForm;
