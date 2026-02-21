import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const RangeSlider = ({
  label,
  value,
  onValueChange,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  error = null,
  required = false,
  style,
  unit = '',
}) => {
  return (
    <View style={[styles.formGroup, style]}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      <View style={[styles.sliderContainer, error && styles.inputError]}>
        <View style={styles.valueRow}>
          <Text style={styles.rangeText}>
            {minimumValue}
            {unit}
          </Text>
          <Text style={styles.valueText}>
            {value}
            {unit}
          </Text>
          <Text style={styles.rangeText}>
            {maximumValue}
            {unit}
          </Text>
        </View>

        <Slider
          value={value}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          step={step}
          onValueChange={onValueChange}
          minimumTrackTintColor="#2563eb"
          maximumTrackTintColor="#d1d5db"
          thumbTintColor="#2563eb"
        />
      </View>

      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  formGroup: { marginBottom: 16 },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },

  required: { color: '#dc2626' },

  sliderContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    backgroundColor: '#fafafa',
  },

  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  valueText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2563eb',
  },

  rangeText: {
    fontSize: 12,
    color: '#6b7280',
  },

  inputError: {
    borderColor: '#dc2626',
    backgroundColor: '#fef2f2',
  },

  errorText: {
    color: '#dc2626',
    fontSize: 12,
    marginTop: 4,
  },
});
