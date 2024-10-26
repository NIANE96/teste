import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PractitionerItem from '../PractitionerItem/PractitionerItem.js';

const PractitionerList = ({ practitioners }) => {
  return (
    <FlatList
      data={practitioners}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <PractitionerItem practitioner={item} />}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 20,
  },
});

export default PractitionerList;
