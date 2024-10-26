import { Image, StyleSheet, Text, View, Alert, ActivityIndicator } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import React, { useContext, useState } from "react";
import * as Location from 'expo-location';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { IMGS, COLORS } from "@/store/constants";
import Button from "../Button/Button";
import AnimatedLabel from "./AnimatedLabel/AnimatedLabel";
import SearchButton from "./SearchButton/SearchButton";
import ServicesLists from "./Services/ServiceLists";
import { AuthContext } from "@/store/context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation(); // Utilisation de useNavigation pour obtenir l'objet navigation
  const { isLoggedIn, logout } = useContext(AuthContext);

  // Services data change
  const [service, setService] = useState("Téléconsultation");
  const onDataChanged = (service) => {
    setService(service);
  };
  
  // Function pour rechercher un praticien
  const handlePress = () => {
    navigation.navigate('PractitionerSearch');
  };

  return (
    <View style={[styles.container]}>
      {/* Formes géométriques en-dessous du contenu */}
      <View style={[styles.shapesContainer]}>
        <View style={[styles.shape, styles.shape1]} />
        <View style={[styles.shape, styles.shape2]}>
          {/* Shape déformé noir à l'intérieur */}  
          <View style={[styles.deformedShape]} />
        </View>
      </View>
      {/* Contenu principal */}
      <View style={[styles.content]}>
        {/* Logo */}
        <View style={[styles.logoContainer]}>
          <Text style={[styles.logoText]}>SenDoctor</Text>
        </View>
        {/* Bouton */}
        {!isLoggedIn ? (
          <Button
            title="Se connecter"
            onPress={() => navigation.navigate("Login")}
            type="quaternary"
          />
        ) : (
          <></>
        )}
      </View>
      {/* Label animé */}
      <AnimatedLabel />
      {/* Bouton de recherche */}
      <SearchButton
        // onPress={() => console.log("Je suis cherche boutton")}
        onPress={handlePress}
        label="Trouver un rendez-vous..."
        iconColor={COLORS.primary}
        textColor={COLORS.primary}
        backgroundColor={COLORS.white}
      />  
      {/* Bouton Liste des services */}
      {isLoggedIn ? (
        <>
          <ServicesLists onServiceChanged={onDataChanged} />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: hp("33%"),
    width: "100%",
  },
  landscapeContainer: {
    height: hp("26.5%"),
  },
  shapesContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: -1, // Place les formes en-dessous du contenu principal
  },
  shape: {
    width: wp("55%"),
    height: hp("16%"),
    backgroundColor: COLORS.white,
    borderRadius: 999,
    position: "absolute",
    top: -hp("2%"),
  },
  shape1: {
    left: -wp("49%"),
  },
  shape2: {
    right: -wp("34%"),
    top: hp("17%"),
  },
  landscapeShape2: {
    top: hp("10%"),
    right: -wp("29%"),
  },
  deformedShape: {
    width: wp("22%"),
    height: hp("10%"),
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    left: -wp("0%"),
    top: hp("3%"),
    // transform: [{ rotate: "60deg" }],
  },
  landscapeDeformedShape: {
    width: wp("24%"),
    height: hp("11%"),
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10@ms",
    paddingVertical: "10@ms",
    width: "100%",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logoText: {
    fontSize: "22@ms",
    fontFamily: "Roboto-Bold", 
    color: COLORS.white,
  },
});
