import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '@/store/constants';

const TitleHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  headerContainer: {
    width: '100%',
    padding: '14@s',
    backgroundColor: COLORS.primary,
  },
  headerText: {
    fontFamily: 'Roboto-Bold',
    fontSize: '16@s',
    color: COLORS.white,
    marginLeft: '8@s',
  },
});

export default TitleHeader;
