import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { useProposalStore } from '@/store/proposalStore';
// shared form helper
import { useForm } from '@/hooks/useFormHandlers';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Input from '@/components/ui/Input';
import ButtonGroup from '@/components/ui/ButtonGroup';

const ProposalForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
  isGenerating = false,
}) => {
  const proposal = useProposalStore(state => state.proposal);
  const { to, subject, description, date } = proposal;

  const updateSectionField = useProposalStore(
    state => state.updateSectionField,
  );

  /* =========================
     DATE FORMATTER
  ========================== */
  const getCurrentDateFormatted = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const { errors, handleChange, handleSubmit } = useForm({
    data: proposal,
    updateField: (field, value) => updateSectionField('proposal', field, value),
    requiredFields: ['to', 'subject', 'description', 'date'],
    isLastStep,
    nextStep,
    generatePDF,
  });

  useEffect(() => {
    if (!date) {
      updateSectionField('proposal', 'date', getCurrentDateFormatted());
    }
  }, [date, updateSectionField]);

  // handleSubmit is provided by the hook

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Proposal" />

        <Input
          label="To"
          value={to}
          placeholder="Enter recipient"
          error={errors.to}
          onChangeText={text => handleChange('to', text)}
        />

        <Input
          label="Subject"
          value={subject}
          placeholder="Subject"
          maxLength={150}
          error={errors.subject}
          onChangeText={text => handleChange('subject', text)}
        />

        <Input
          label="Description"
          value={description}
          placeholder="Describe description..."
          multiline
          error={errors.description}
          onChangeText={text => handleChange('description', text)}
        />

        <Input
          label="Date"
          value={date || ''}
          editable={false}
          error={errors.date}
          inputStyle={styles.readonlyInput}
        />

        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleSubmit}
          isGenerating={isGenerating}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default ProposalForm;

const styles = StyleSheet.create({
  readonlyInput: {
    backgroundColor: '#f3f4f6',
  },
});
