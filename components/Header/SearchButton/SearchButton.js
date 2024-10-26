import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Icon from "react-native-vector-icons/FontAwesome";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import { COLORS } from "@/store/constants";

const SearchButton = ({
  onPress,
  label,
  iconColor,
  textColor,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      delayPressIn={0}
      onPress={onPress}
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <Icon
        name="search"
        size={18}
        color={iconColor}
        style={[styles.icon]}
      />
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: "20@ms",
    paddingHorizontal: "19@ms",
    paddingVertical: "10@ms",
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: "2@ms",
    maxWidth: "230@ms",
    alignSelf: "center", // je centre horizontalement dans le parent
    marginTop: hp('-0.2%'),
    zIndex: 10,
  },
  icon: {
    marginRight: "10@ms",
  },
  label: {
    fontSize: "12@ms",
    fontFamily: "Roboto-Bold",
  },
});

export default SearchButton;
