import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorText = ({ children }) => {
  if (!children) return null;
  return <Text style={styles.text}>{children}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    color: '#dc2626',
    fontSize: 12,
    marginTop: 4,
  },
});
