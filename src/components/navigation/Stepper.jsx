import React, { useState } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, Text } from 'react-native';

const Stepper = ({ steps = [], useStore, onGeneratePDF }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const data = useStore ? useStore() : null;

  if (!steps.length) {
    return <View style={styles.container} />;
  }

  const totalSteps = steps.length - 1;
  const ActiveForm = steps[currentStep];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
    }
  };

  const handleGeneratePDF = async () => {
    if (onGeneratePDF) {
      try {
        setIsGenerating(true);
        await onGeneratePDF(data);
      } catch (err) {
        // assume the caller handles errors/alerts
        console.error('generatePDF handler threw', err);
      } finally {
        setIsGenerating(false);
      }
    } else {
      Alert.alert('PDF', 'PDF service not configured');
    }
  };

  return (
    <View style={styles.container}>
      <ActiveForm
        nextStep={nextStep}
        prevStep={prevStep}
        isLastStep={currentStep === totalSteps}
        generatePDF={handleGeneratePDF}
        isGenerating={isGenerating}
      />

      {isGenerating && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.overlayText}>Generating PDF...</Text>
        </View>
      )}
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  overlayText: {
    color: '#fff',
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
  },
});
