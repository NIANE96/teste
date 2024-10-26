import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicalRecordScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Dossier Médical</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MedicalRecordScreen;
