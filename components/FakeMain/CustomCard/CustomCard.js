/**
 * @project SenDoctor
 * @description Ce projet est une application mobile développée avec Expo et React Native et est déstinée au Santé.
 * @version 1.0.0
 * @date 2024-06-02
 * @license MIT
 * 
 * @file CustomCard.js
 * @description Affiche des informationde de l'application pour les utilisateurs non connecter.
 * @module CustomCard
 * 
 * @authors
 * - NIANE Adoulaye (ablayeniane658@gmail.com)
 * 
 * @maintainer NIANE Abdoulaye (ablayeniane658@gmail.com)
 * 
 * @see https://github.com/NIANE96/Projet_SenDoctor_01
 */

/**
 * @component CustomCard
 * @description Composant de carte personnalisée affichant une image, un titre, un sous-titre et un bouton.
 * Utilise des styles réactifs pour s'adapter à l'orientation de l'écran (portrait/paysage) et gère le chargement des images avec un indicateur de chargement.
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Object} props.imageSource - Source de l'image à afficher.
 * @param {string} props.title - Titre de la carte.
 * @param {string} props.subTitle - Sous-titre de la carte.
 * @param {function} props.onPress - Fonction à appeler lors du clic sur le bouton.
 * 
 * @returns {JSX.Element} Le composant CustomCard.
 * 
 * @example
 * <CustomCard 
 *   imageSource={require('path/to/image.png')}
 *   title="Titre de la Carte"
 *   subTitle="Sous-titre de la Carte"
 *   onPress={() => console.log('Bouton cliqué')}
 * />
 */

// Importations nécessaires
import React, { useContext, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";

// Mes Import
import { COLORS } from "@/store/constants";
import Button from "../../Button/Button";
import styles from '@/styles/CustomCard/CustomCard.style';
import { AuthContext } from "@/store/context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const CustomCard = ({ imageSource, title, subTitle, onPress }) => {

  const navigation = useNavigation(); // Utilisation de useNavigation pour obtenir l'objet navigation
  const { isLoggedIn, logout } = useContext(AuthContext);

  // Indicateur de chargement locaux pour gérer le chargement des images
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <View style={[styles.cardContainer]}>
      {!imageLoaded && <ActivityIndicator size="large" color={COLORS.primary} />}
      <Image
        source={imageSource}
        style={[
          styles.cardImage,
          { opacity: imageLoaded ? 1 : 0 },
        ]}
        onLoad={() => setImageLoaded(true)}
        onError={() => console.warn("Failed to load image")}
      />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubTitle}>{subTitle}</Text>
      <Button
        title="SE CONNECTER"
        onPress={() => navigation.navigate('Login')}
        type="primary"
      />
    </View>
  );
};
export default CustomCard;
