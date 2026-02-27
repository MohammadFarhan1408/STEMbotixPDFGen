import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDeliveryStore } from '@/store/deliveryStore';

// LAYOUT
import FormContainer from '@/components/layout/FormContainer';
import FormCard from '@/components/layout/FormCard';
import FormHeader from '@/components/layout/FormHeader';

// UI
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/ButtonGroup';

const SerialNumbersForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const serialNumbers = useDeliveryStore(state => state.serialNumbers);
  const updateSerial = useDeliveryStore(state => state.updateSerial);
  const addSerial = useDeliveryStore(state => state.addSerial);
  const removeSerial = useDeliveryStore(state => state.removeSerial);

  const handleNext = () => {
    if (isLastStep && generatePDF) {
      generatePDF();
    } else {
      nextStep();
    }
  };

  return (
    <FormContainer>
      <FormCard>
        <FormHeader title="Serial Numbers" />

        {/* Printers */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>3D Printers</Text>

          {serialNumbers.printers.map((value, i) => (
            <View key={i} style={styles.itemCard}>
              <View style={styles.row}>
                <Input
                  placeholder="Printer Serial Number"
                  value={value}
                  maxLength={50}
                  style={{ flex: 1, marginBottom: 0 }}
                  onChangeText={text => updateSerial('printers', i, text)}
                />
              </View>

              {serialNumbers.printers.length > 1 && (
                <View style={styles.deleteRow}>
                  <Button
                    title="Delete"
                    variant="danger"
                    onPress={() => removeSerial('printers', i)}
                    style={styles.deleteBtn}
                  />
                </View>
              )}
            </View>
          ))}

          <Button
            title="+ Add New Printer"
            variant="outline"
            onPress={() => addSerial('printers')}
            style={{ marginTop: 8 }}
          />
        </View>

        {/* Laptops */}
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Laptops</Text>

          {serialNumbers.laptops.map((value, i) => (
            <View key={i} style={styles.itemCard}>
              <View style={styles.row}>
                <Input
                  placeholder="Laptop Serial Number"
                  value={value}
                  maxLength={50}
                  style={{ flex: 1, marginBottom: 0 }}
                  onChangeText={text => updateSerial('laptops', i, text)}
                />
              </View>

              {serialNumbers.laptops.length > 1 && (
                <View style={styles.deleteRow}>
                  <Button
                    title="Delete"
                    variant="danger"
                    onPress={() => removeSerial('laptops', i)}
                    style={styles.deleteBtn}
                  />
                </View>
              )}
            </View>
          ))}

          <Button
            title="+ Add New Laptop"
            variant="outline"
            onPress={() => addSerial('laptops')}
            style={{ marginTop: 8 }}
          />
        </View>

        {/* Navigation Buttons */}
        <ButtonGroup
          prevStep={prevStep}
          nextStep={handleNext}
          isLastStep={isLastStep}
        />
      </FormCard>
    </FormContainer>
  );
};

export default SerialNumbersForm;

const styles = StyleSheet.create({
  sectionBlock: {
    marginTop: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333',
  },
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
});
