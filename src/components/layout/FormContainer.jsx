import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const FormContainer = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
});
