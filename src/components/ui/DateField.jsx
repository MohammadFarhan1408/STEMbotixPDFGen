import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DateField = ({
  label,
  value,
  onChange,
  error = null,
  required = false,
  style,
  inputStyle,
  mode = 'date',
  minimumDate,
  maximumDate,
}) => {
  const [open, setOpen] = useState(false);

  const formattedValue = value ? new Date(value).toLocaleDateString() : '';

  return (
    <View style={[styles.formGroup, style]}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setOpen(true)}
        style={[styles.input, error && styles.inputError, inputStyle]}
      >
        <Text style={{ color: formattedValue ? '#333' : '#999' }}>
          {formattedValue || 'Select date'}
        </Text>
      </TouchableOpacity>

      {!!error && <Text style={styles.errorText}>{error}</Text>}

      <DatePicker
        modal
        open={open}
        date={value ? new Date(value) : new Date()}
        mode={mode}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        onConfirm={selectedDate => {
          setOpen(false);
          const formatted = selectedDate.toISOString();
          onChange && onChange(formatted);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
};

export default DateField;

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
  required: {
    color: '#dc2626',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    backgroundColor: '#fafafa',
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
