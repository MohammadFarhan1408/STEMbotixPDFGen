import React from 'react';
import { View, StyleSheet } from 'react-native';

const FormCard = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default FormCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 3,
  },
});
