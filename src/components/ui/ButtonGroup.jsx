import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '@/components/ui/Button';

const ButtonGroup = ({ prevStep, nextStep, isGenerating, isLastStep }) => {
  return (
    // NAVIGATION
    <View style={styles.buttonGroup}>
      <Button
        title="Back"
        variant="secondary"
        onPress={prevStep}
        style={{ flex: 1 }}
      />
      <Button
        title={
          isGenerating ? 'Generating...' : isLastStep ? 'Generate PDF' : 'Next'
        }
        variant="primary"
        onPress={nextStep}
        style={{ flex: 1 }}
        disabled={isGenerating}
      />
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
});
