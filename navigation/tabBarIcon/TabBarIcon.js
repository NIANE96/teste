import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import useOrientation from "@/hooks/useOrientation";

const TabBarIcon = ({ focused, name, color, size, label }) => {
  const { isPortrait, isLandscape } = useOrientation();
  const iconSize = isPortrait ? size : size * 0.7; // J'ajuste la taille en fonction de l’orientation

  return (
    <View style={styles.tabBarItem}>
      {focused && (
        <View
          style={[
            styles.focusedBar,
            {
              width: isPortrait ? wp("20.1%") : wp("63%"), // J'ajuste la largeur en fonction de orientation
              top: isPortrait ? hp("-0.01%") : hp("-0.2%"), // J'ajuste la position en fonction de orientation
              backgroundColor: color,
            },
            isLandscape && styles.landscapeFucusBar
          ]}
        />
      )}
      <Ionicons name={name} size={iconSize} color={color} />
      <Text
        style={[
          styles.label,
          { color, fontSize: isPortrait ? wp("2.6%") : wp("1.8%") }, // J'ajuste la taille de la police en fonction de orientation
          isPortrait ? styles.portraitLabel : styles.landscapeLabel, // J'applique un style paysage en mode paysage
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  focusedBar: {
    height: 1.8,
    position: "absolute",
  },
  landscapeFucusBar: {
    justifyContent: 'flex-start',
    width: wp('30%'),
  },
  label: {
    textAlign: "center",
    marginTop: 5,
  },
  portraitLabel: {
    width: "100%",
  },
  landscapeLabel: {
    width: "80%",
  },
});

export default TabBarIcon;
