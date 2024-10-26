import React from "react";
import { TouchableOpacity, Text, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "@/store/constants";

const Button = ({ title, onPress, type, iconLeft  }) => {

  let buttonStyle, textStyle;

  // Sélectionne le style en fonction du type de bouton
  switch (type) {
    case "primary":
      buttonStyle = styles.buttonPrimary;
      textStyle = styles.buttonPrimaryText;
      break;
    case "secondary":
      buttonStyle = styles.buttonSecondary;
      textStyle = styles.buttonSecondaryText;
      break;
    case "tertiary":
      buttonStyle = styles.buttonTertiary;
      textStyle = styles.buttonTertiaryText;
      break;
    case "quaternary":
      buttonStyle = styles.buttonQuaternary;
      textStyle = styles.buttonQuaternaryText;
      break;
    default:
      buttonStyle = styles.buttonPrimary;
      textStyle = styles.buttonPrimaryText;
      break;
  }

  if (iconLeft) {
    buttonStyle = [buttonStyle, styles.buttonWithIcon];
  }

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={0.7} // Ajuste l'opacité lors du clic
      delayPressIn={0} // Réduit le délai de détection du clic
    >
        {/* Vérifie si une icône doit être affichée à gauche */}
        {iconLeft && (
        <FontAwesome
          name={iconLeft}
          size={20}
          color={type === "quaternary" ? COLORS.white : COLORS.primary}
          style={styles.iconLeft}
        />
      )}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    borderRadius: "5@s",
    paddingVertical: "10@s",
    paddingHorizontal: "20@s",
    alignItems: "center",
    marginVertical: "10@s",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonPrimaryText: {
    color: COLORS.white,
    fontFamily: "Roboto-Bold",
    fontSize: "12@s",
    marginLeft: "5@s",
  },
  buttonSecondary: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: "2@s",
    borderRadius: "5@s",
    paddingVertical: "10@s",
    paddingHorizontal: "20@s",
    alignItems: "center",
    marginVertical: "10@s",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonSecondaryText: {
    color: COLORS.primary,
    fontFamily: "Roboto-Bold",
    fontSize: "12@s",
    marginLeft: "5@s",
  },
  buttonTertiary: {
    backgroundColor: "transparent",
    borderWidth: "1@s",
    borderColor: COLORS.primary,
    borderRadius: "5@s",
    paddingVertical: "8@s",
    paddingHorizontal: "18@s",
    alignItems: "center",
    marginVertical: "10@s",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonTertiaryText: {
    color: COLORS.primary,
    fontFamily: "Roboto-Bold",
    fontSize: "12@s",
    marginLeft: "5@s",
  },
  buttonQuaternary: {
    backgroundColor: 'transparent',
    elevation: 5, // Ajoute une élévation
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingVertical: '10@s',
    paddingHorizontal: '20@s',
    alignItems: 'center',
    marginVertical: '10@s',
    position: "absolute",
    right: "-14@ms",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonQuaternaryText: {
    color: COLORS.white,
    fontFamily: 'Roboto-Bold',
    fontSize: '13@s',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Ajoute une ombre au texte
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginRight: "5@s",
  },
  iconLeft: {
    marginRight: "5@s", // Marge à droite de l'icône
  },
  buttonWithIcon: {
    paddingVertical: "8@s",
    paddingHorizontal: "70@s",
  },
});

export default Button;
