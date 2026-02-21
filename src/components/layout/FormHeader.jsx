import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const FormHeader = ({ title, subtitle }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default FormHeader;

const styles = StyleSheet.create({
  wrapper: { marginBottom: 20 },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
});
