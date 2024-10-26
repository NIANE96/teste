import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PractitionerItem = ({ practitioner }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{practitioner.name}</Text>
      <Text>{practitioner.specialty}</Text>
      <Text>{practitioner.hospital}</Text>
      <Text>{practitioner.address}</Text>
      <Text>{practitioner.phone}</Text>
      <Text>{practitioner.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PractitionerItem;
