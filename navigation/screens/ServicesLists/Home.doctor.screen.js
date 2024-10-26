import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeDoctorScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Médecin à domicile</Text>
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

export default HomeDoctorScreen;
