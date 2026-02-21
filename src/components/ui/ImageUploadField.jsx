import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImageUploadField = ({
  label,
  value = [],
  onChange,
  error,
  maxSelection = 8,
  required = false,
}) => {
  const pickImages = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: maxSelection,
        quality: 0.8,
      },
      response => {
        if (response.didCancel) return;

        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Image pick failed');
          return;
        }

        const assets = response.assets || [];
        if (assets.length > 0) {
          onChange(assets);
        }
      },
    );
  };

  const removeImage = index => {
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      <TouchableOpacity style={styles.pickButton} onPress={pickImages}>
        <Text style={styles.pickButtonText}>
          {value.length > 0 ? 'Change Images' : 'Select Images'}
        </Text>
      </TouchableOpacity>

      {value.length > 0 && (
        <View style={styles.grid}>
          {value.map((img, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image
                source={{ uri: img.uri }}
                style={styles.image}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeImage(index)}
              >
                <Text style={styles.removeText}>×</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default ImageUploadField;

const styles = StyleSheet.create({
  container: {
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
  pickButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  pickButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  imageWrapper: {
    width: '48%',
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 120,
  },
  removeButton: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(220,38,38,0.9)',
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeText: {
    color: '#fff',
    fontWeight: '700',
  },
  errorText: {
    color: '#dc2626',
    fontSize: 12,
    marginTop: 4,
  },
});
