// components/CustomButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";

const CustomBackButton = ({ title, onPress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
        <Ionicons name="chevron-back" size={24} color={COLORS.white} style={{marginRight: 8}} />
      </TouchableOpacity>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    width: wp(100),
    padding: 14,
    backgroundColor: COLORS.primary,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    width: wp(30),
   
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 28,
  },
});

export default CustomBackButton;
