import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PreliminaryCareScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Télédiagnostic</Text>
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

export default PreliminaryCareScreen;
