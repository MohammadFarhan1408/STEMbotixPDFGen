import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const Button = ({
  title,
  onPress,
  variant = 'primary', // primary | secondary | danger | outline
  disabled = false,
  loading = false,
  style,
  textStyle,
  ...rest
}) => {
  const variantStyle = styles[variant] || styles.primary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variantStyle.container,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={variantStyle.text.color} />
      ) : (
        <Text style={[styles.text, variantStyle.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const baseText = {
  fontSize: 16,
  fontWeight: '600',
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabled: {
    opacity: 0.6,
  },

  text: baseText,

  /* VARIANTS */

  primary: {
    container: {
      backgroundColor: '#2563eb',
    },
    text: {
      color: '#ffffff',
    },
  },

  secondary: {
    container: {
      backgroundColor: '#6b7280',
    },
    text: {
      color: '#ffffff',
    },
  },

  danger: {
    container: {
      backgroundColor: '#dc2626',
    },
    text: {
      color: '#ffffff',
    },
  },

  outline: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#2563eb',
    },
    text: {
      color: '#2563eb',
    },
  },
});
