import React, { useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { pick, types, isCancel } from '@react-native-documents/picker';
import { useDeliveryStore } from '@/store/deliveryStore';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Button from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/ButtonGroup';

// Custom Hook
import { useExcelParser } from '@/hooks/useExcelParser';

const ItemChecklistForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const deliveryDataFromStore = useDeliveryStore();
  const [localItems, setLocalItems] = useState([]);

  const { parseFile, isProcessing } = useExcelParser(items => {
    setLocalItems(items);
  });

  useEffect(() => {
    console.log(localItems);
  }, [localItems]);

  const handlePickFile = async () => {
    try {
      const res = await pick({
        type: [types.allFiles],
        allowMultiSelection: false,
      });

      if (!res || !res[0]) {
        Alert.alert('No file selected');
        return;
      }

      await parseFile(res[0]);
    } catch (err) {
      if (isCancel(err)) {
        // user cancelled, do nothing
      } else {
        console.error(err);
        Alert.alert('Failed to pick file');
      }
    }
  };

  const handleNext = () => {
    if (localItems.length === 0) {
      Alert.alert('Please upload an Excel file before continuing.');
      return;
    }

    if (isLastStep && generatePDF) {
      generatePDF(deliveryDataFromStore, localItems);
    } else {
      nextStep();
    }
  };

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Item Checklist" />

        <View style={styles.block}>
          <Text style={styles.label}>Upload Item List (Excel)</Text>

          <Button
            title="Select Excel File"
            variant="outline"
            onPress={handlePickFile}
          />

          {isProcessing && (
            <Text style={styles.processingText}>Processing...</Text>
          )}

          {localItems.length > 0 && (
            <Text style={styles.successText}>
              {localItems.length} items loaded
            </Text>
          )}
        </View>

        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleNext}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default ItemChecklistForm;

const styles = StyleSheet.create({
  block: {
    marginVertical: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  processingText: {
    marginTop: 8,
    color: '#6b7280',
  },
  successText: {
    marginTop: 8,
    color: '#059669',
    fontWeight: '600',
  },
});
