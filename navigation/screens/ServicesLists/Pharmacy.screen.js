import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PharmacyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pharmacie</Text>
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

export default PharmacyScreen;
