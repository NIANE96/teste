import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { COLORS } from "@/store/constants";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function GenderButton({ title, selected, onPress, style }) {
  const isMasculin = title === "Masculin";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.genderButton,
        isMasculin && styles.genderButtonMasculin, // J'appliquee le style spécifique au bouton "Masculin"
        selected && styles.genderButtonSelected,
        selected && isMasculin && styles.genderButtonSelectedMasculin, // Style sélectionné spécifique pour "Masculin"
        style, // appliquation de style personnalisé
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        {selected ? (
          <Icon name="check-circle" size={18} color={COLORS.primary} />
        ) : (
          <Icon name="circle" size={18} color={COLORS.gray_2} />
        )}
      </View>
      <Text
        style={[
          styles.genderButtonText,
          selected && styles.genderButtonTextSelected,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = ScaledSheet.create({
  genderButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: COLORS.gray_2,
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("6%"),
    borderRadius: 6,
    width: wp("44%"),
    marginBottom: hp("1%"),
  },
  genderButtonSelected: {
    borderColor: COLORS.primary,
  },
  genderButtonText: {
    color: COLORS.tertiary,
    marginLeft: wp("2%"),
    fontFamily: "Roboto-Medium",
  },
  genderButtonTextSelected: {
    color: COLORS.primary,
  },
  iconContainer: {
    width: wp("5%"),
    alignItems: "center",
    justifyContent: "center",
  },
  genderButtonMasculin: {
    marginLeft: wp("3%"),
  },
});
