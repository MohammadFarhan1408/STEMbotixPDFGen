import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

// Helper to ensure gender distribution sums to 100%
const clampGenderValue = (field, value, current) => {
  const numValue = Number(value) || 0;

  const female = Number(current?.female) || 0;
  const male = Number(current?.male) || 0;
  const other = Number(current?.other) || 0;

  let used = 0;

  if (field === 'female') used = male + other;
  if (field === 'male') used = female + other;
  if (field === 'other') used = female + male;

  const maxAllowed = 100 - used;
  const safeValue = Math.max(0, Math.min(numValue, maxAllowed));

  return {
    ...current,
    [field]: safeValue,
  };
};

const BeneficiaryProfileForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const beneficiaryProfile = useReportStore(state => state.beneficiaryProfile);

  const updateBeneficiaryProfile = useReportStore(
    state => state.updateSectionField,
  );

  const { errors, handleChange, handleSubmit } = useForm({
    data: beneficiaryProfile,
    updateField: (field, value) =>
      updateBeneficiaryProfile('beneficiaryProfile', field, value),
    requiredFields: [
      'totalBeneficiaries',
      'ageGroup',
      'genderDistribution',
      'educationBackground',
      'socioEconomicBackground',
      'geographicCoverage',
    ],
    extraValidation: data => {
      const gender = data.genderDistribution || {};
      const totalGender =
        Number(gender.female || 0) +
        Number(gender.male || 0) +
        Number(gender.other || 0);

      if (totalGender > 100) {
        return { genderDistribution: 'Gender distribution must sum to 100%' };
      }

      // Age group validation
      if (data.ageGroup) {
        const [from, to] = data.ageGroup.split('-').map(n => Number(n));

        if (!Number.isFinite(from) || !Number.isFinite(to)) {
          errors.ageGroup = 'Both ages must be valid numbers';
        } else if (from > to) {
          errors.ageGroup = '"From" age cannot be greater than "To" age';
        }
      }

      return {};
    },
    isLastStep,
    nextStep,
    generatePDF,
  });

  const fromAge = beneficiaryProfile.ageGroup?.split('-')[0] || '';
  const toAge = beneficiaryProfile.ageGroup?.split('-')[1] || '';

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Beneficiary Profile" />

        {/* Total Beneficiaries */}

        <Input
          label="Total Beneficiaries (Direct & Indirect)"
          value={beneficiaryProfile.totalBeneficiaries}
          keyboardType="numeric"
          placeholder="Enter total beneficiaries"
          error={errors.totalBeneficiaries}
          onChangeText={text =>
            handleChange('totalBeneficiaries', Number(text) || 0)
          }
        />

        {/* Age Group */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Age Group</Text>
          <View style={styles.row}>
            <Input
              style={styles.flex}
              placeholder="From"
              value={fromAge}
              keyboardType="numeric"
              error={errors.ageGroup}
              onChangeText={text => {
                const from = Number(text) || 0;
                const to = Number(toAge) || 0;

                const safeFrom = to ? Math.min(from, to) : from;

                const updated = `${safeFrom}-${toAge || ''}`;
                handleChange('ageGroup', updated);
              }}
            />

            <Input
              style={styles.flex}
              placeholder="To"
              value={toAge}
              keyboardType="numeric"
              error={errors.ageGroup}
              onChangeText={text => {
                const to = Number(text) || 0;
                const from = Number(fromAge) || 0;

                const safeTo = from ? Math.max(to, from) : to;

                const updated = `${fromAge || ''}-${safeTo}`;
                handleChange('ageGroup', updated);
              }}
            />
          </View>
        </View>

        {/* Gender Distribution */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Gender Distribution (Total = 100)</Text>
          <View style={styles.row}>
            <Input
              style={styles.flex}
              placeholder="Female"
              keyboardType="numeric"
              value={beneficiaryProfile.genderDistribution?.female}
              error={errors.genderDistribution}
              onChangeText={text =>
                handleChange(
                  'genderDistribution',
                  clampGenderValue(
                    'female',
                    text,
                    beneficiaryProfile.genderDistribution,
                  ),
                )
              }
            />
            <Input
              style={styles.flex}
              placeholder="Male"
              keyboardType="numeric"
              value={beneficiaryProfile.genderDistribution?.male}
              error={errors.genderDistribution}
              onChangeText={text =>
                handleChange(
                  'genderDistribution',
                  clampGenderValue(
                    'male',
                    text,
                    beneficiaryProfile.genderDistribution,
                  ),
                )
              }
            />
            <Input
              style={styles.flex}
              placeholder="Other"
              keyboardType="numeric"
              value={beneficiaryProfile.genderDistribution?.other}
              error={errors.genderDistribution}
              onChangeText={text =>
                handleChange(
                  'genderDistribution',
                  clampGenderValue(
                    'other',
                    text,
                    beneficiaryProfile.genderDistribution,
                  ),
                )
              }
            />
          </View>
        </View>

        {/* Educational Background */}
        <Input
          label="Educational Background"
          value={beneficiaryProfile.educationBackground}
          placeholder="Enter educational background"
          error={errors.educationBackground}
          onChangeText={text => handleChange('educationBackground', text)}
          maxLength={50}
        />

        {/* Socio-economic Background */}
        <Input
          label="Socio-economic Background"
          value={beneficiaryProfile.socioEconomicBackground}
          placeholder="Enter socio-economic background"
          error={errors.socioEconomicBackground}
          onChangeText={text => handleChange('socioEconomicBackground', text)}
          maxLength={50}
        />

        {/* Geographic Coverage */}
        <Input
          label="Geographic Coverage"
          value={beneficiaryProfile.geographicCoverage}
          placeholder="Enter geographic coverage"
          error={errors.geographicCoverage}
          onChangeText={text => handleChange('geographicCoverage', text)}
          maxLength={100}
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

export default BeneficiaryProfileForm;

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  flex: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fafafa',
  },
});
