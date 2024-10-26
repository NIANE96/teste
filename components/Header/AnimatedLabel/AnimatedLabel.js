import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import { LABELS } from "@/data/Data";
import { COLORS } from "@/store/constants";

const INTERVAL = 2000; // Intervalle en millisecondes pour changer le texte

const AnimatedLabel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % LABELS.length);
    }, INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Trouver un rendez-vous avec</Text>
      <Text style={[styles.label]}>{LABELS[currentIndex]}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp('3%'),
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: '16@ms',
    color: COLORS.white,
  },
  label: {
    fontSize: '23@ms',
    fontFamily: "Roboto-Bold",
    marginTop: '6@ms',
    //color: "#08244c",
    color: COLORS.green_white,
  },
});

export default AnimatedLabel;
