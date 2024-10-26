/**
 * @project SenDoctor
 * @description Ce projet est une application mobile développée avec Expo et React Native et est destiné à la santé.
 * @version 1.0.0
 * @date 2024-06-02
 * @license MIT
 *
 * @file FakeMain.js
 * @description Affiche des informations de l'application pour les utilisateurs non connectés.
 * @module FakeMain
 *
 * @authors
 * - NIANE Adoulaye (ablayeniane658@gmail.com)
 *
 * @maintainer NIANE Abdoulaye (ablayeniane658@gmail.com)
 *
 * @see https://github.com/NIANE96/Projet_SenDoctor_01
 */

/**
 * @component FakeMain
 * @description Composant principal affichant des informations sur l'application et permettant aux utilisateurs de se connecter.
 *
 * @returns {JSX.Element} Le composant FakeMain.
 *
 * @example
 * <FakeMain />
 */

import { Text, View, Image } from "react-native";
import React from "react";
import Button from "../Button/Button";
import { COLORS, IMGS } from "@/store/constants";
import styles from "@/styles/FakeMain/FakeMain.style";
import FooterCard from "../footer/footerCard/FooterCard";

const FakeMain = () => {
  const handlePress = () => {
    console.log("Je suis praticien");
  };

  return (
    <View style={[styles.container]}>
      <Button
        title="Êtes-vous un praticien ?"
        onPress={handlePress}
        type="tertiary"
      />
      <Text style={[styles.maintitle]}>
        SenDoctor : dédié à la gestion de votre santé
      </Text>
      <View style={[styles.contentImgsContainer]}>
        <View style={[styles.contentImgsTitle]}>
          <Image source={IMGS.ImageCalendar} style={styles.image} />
          <View style={styles.subTitleContainer}>
            <Text style={[styles.subTitle]}>
              Accédez facilement et rapidement à une vaste
            </Text>
            <Text
              style={[
                styles.subTitle,
                { color: COLORS.textSecondary },
                { fontFamily: "Roboto-Medium" },
              ]}
            >
              communauté de praticiens
            </Text>
          </View>
        </View>

        <View style={[styles.contentImgsTitle]}>
          <Image source={IMGS.ImageManager} style={styles.image} />
          <View style={styles.subTitleContainer}>
            <Text style={[styles.subTitle]}>
              Gérez votre santé et celle de vos proches de façon
            </Text>
            <Text
              style={[
                styles.subTitle,
                { color: COLORS.textSecondary },
                { fontFamily: "Roboto-Medium" },
              ]}
            >
              sécurisée : rendez-vous, comptes, documents
            </Text>
          </View>
        </View>
      </View>
      <FooterCard />
      <View style={[styles.policyContainer]}>
        <Image source={IMGS.ImagePolicy} style={styles.policyImage} />
        <Text style={{ fontFamily: "Roboto-Bold", color: COLORS.tertiary }}>
          Votre santé et Vos données.
        </Text>
        <Text
          style={[
            styles.subTitle,
            {
              flexWrap: "wrap",
              textAlign: "justify",
              marginTop: 20,
              marginBottom: 15,
            },
          ]}
        >
          La confidentialité de vos informations personnelles est une priorité
          absolue pour SenDoctor et guide notre action au quotidien.
        </Text>
        <Button
          title="DECOUVRIR NOS ENGAGEMENTS"
          onPress={handlePress}
          type="primary"
        />
      </View>
    </View>
  );
};

export default FakeMain;
