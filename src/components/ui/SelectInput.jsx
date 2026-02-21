import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectInput = ({
  label,
  value,
  onValueChange,
  items = [],
  placeholder = 'Select an option',
  error = null,
  required = false,
  style,
}) => {
  return (
    <View style={[styles.formGroup, style]}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      <View style={[styles.pickerContainer, error && styles.inputError]}>
        <Picker
          selectedValue={value}
          onValueChange={onValueChange}
          dropdownIconColor="#6b7280"
        >
          <Picker.Item label={placeholder} value="" color="#999" />
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>

      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  formGroup: { marginBottom: 16 },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },

  required: { color: '#dc2626' },

  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fafafa',
    overflow: 'hidden',
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
