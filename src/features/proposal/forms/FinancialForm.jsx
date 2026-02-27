import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useProposalStore } from '@/store/proposalStore';
import { useForm } from '@/hooks/useFormHandlers';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/ButtonGroup';

const FinancialForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
  isGenerating = false,
}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const items = useProposalStore(state => state.financialProposal);
  const updateFinancialItem = useProposalStore(
    state => state.updateFinancialItem,
  );
  const addFinancialItem = useProposalStore(state => state.addFinancialItem);
  const removeFinancialItem = useProposalStore(
    state => state.removeFinancialItem,
  );

  const {
    errors: hookErrors,
    handleChange,
    handleSubmit,
  } = useForm({
    data: { items }, // hook doesn't use this deeply, extraValidate will
    updateField: (key, value) => {
      const [field, idx] = key.split('_');
      updateFinancialItem(Number(idx), field, value);
    },
    requiredFields: [],
    isLastStep,
    nextStep,
    generatePDF,
    extraValidate: () => {
      const newErrors = {};
      items.forEach((item, i) => {
        if (!item.particular || String(item.particular).trim() === '') {
          newErrors[`particular_${i}`] = 'Particular is required';
        }
        if (!item.description || String(item.description).trim() === '') {
          newErrors[`description_${i}`] = 'Description is required';
        }
        if (
          item.amount === '' ||
          item.amount === null ||
          item.amount === undefined
        ) {
          newErrors[`amount_${i}`] = 'Amount is required';
        } else if (isNaN(Number(item.amount))) {
          newErrors[`amount_${i}`] = 'Amount must be a number';
        } else if (Number(item.amount) <= 0) {
          newErrors[`amount_${i}`] = 'Amount must be greater than 0';
        }
      });
      return newErrors;
    },
  });

  const totalAmount = useMemo(() => {
    return items.reduce((sum, it) => {
      const val = Number(it.amount) || 0;
      return sum + val;
    }, 0);
  }, [items]);

  // old change logic replaced by hook's handleChange via key format
  const handleItemChange = (index, field, value) => {
    handleChange(`${field}_${index}`, value);
  };

  // validation handled in extraValidate above

  const handleSubmitWrapper = () => {
    setHasSubmitted(true);
    handleSubmit();
  };

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Financial Proposal" />

        {items.map((it, i) => (
          <View key={i} style={styles.itemCard}>
            {/* ROW */}
            <View style={styles.row}>
              <Input
                placeholder="Particular Item"
                value={it.particular}
                maxLength={50}
                style={{ flex: 1, marginBottom: 0 }}
                error={hasSubmitted ? hookErrors[`particular_${i}`] : null}
                onChangeText={text => handleItemChange(i, 'particular', text)}
              />

              <Input
                placeholder="0"
                value={String(it.amount)}
                keyboardType="numeric"
                style={{ width: 110, marginBottom: 0 }}
                error={hasSubmitted ? hookErrors[`amount_${i}`] : null}
                onChangeText={text => handleItemChange(i, 'amount', text)}
              />
            </View>

            <Input
              placeholder="Enter Specification"
              value={String(it.specification)}
              maxLength={50}
              error={hasSubmitted ? hookErrors[`specification_${i}`] : null}
              onChangeText={text => handleItemChange(i, 'specification', text)}
            />

            <Input
              placeholder="Enter Bill of Quantities"
              value={String(it.boq)}
              error={hasSubmitted ? hookErrors[`boq_${i}`] : null}
              onChangeText={text => handleItemChange(i, 'boq', text)}
            />

            <Input
              placeholder="Brief description"
              value={it.description}
              multiline
              maxLength={200}
              error={hasSubmitted ? hookErrors[`description_${i}`] : null}
              onChangeText={text => handleItemChange(i, 'description', text)}
            />
            {items.length > 1 && (
              <View style={styles.deleteRow}>
                <Button
                  title="Delete"
                  variant="danger"
                  onPress={() => removeFinancialItem(i)}
                  style={styles.deleteBtn}
                />
              </View>
            )}
          </View>
        ))}

        {/* ADD ITEM */}
        <Button
          title="+ Add New Line Item"
          variant="outline"
          onPress={addFinancialItem}
          style={{ marginTop: 8 }}
        />

        {/* TOTAL */}
        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Total Proposed Amount</Text>
          <Input
            value={String(totalAmount)}
            editable={false}
            inputStyle={styles.readonlyInput}
          />
        </View>

        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleSubmitWrapper}
          isGenerating={isGenerating}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default FinancialForm;

const styles = StyleSheet.create({
  itemCard: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fafafa',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  deleteRow: {
    marginTop: 8,
    alignItems: 'flex-end',
  },
  deleteBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  totalBox: {
    marginTop: 16,
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  readonlyInput: {
    backgroundColor: '#f3f4f6',
  },
});
