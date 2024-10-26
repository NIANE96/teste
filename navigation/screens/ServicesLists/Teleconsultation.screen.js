import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeleconsultationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Téléconsulation</Text>
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

export default TeleconsultationScreen;
