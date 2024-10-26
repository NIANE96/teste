import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/home/Home.screen";
import AppointmentScreen from "../screens/appointment/Appointment.screen";
import MessagesScreen from "../screens/messages/Messages.screen";
import Documentsscreen from "../screens/document/Document.screen";
import ProfileScreen from "../screens/profile/Profile.screen";

import TabBarIcon from "../tabBarIcon/TabBarIcon";
import { COLORS } from "@/store/constants";
import { AuthContext } from "@/store/context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const navigation = useNavigation();

  const {isLoggedIn} = useContext(AuthContext);
  const iconSize = wp("5.5%");

  const tabBarLabelStyle = {
    fontSize: wp("1.2%"),
    marginBottom: hp("1%"),
  };

  const tabBarStyle = {
    borderTopWidth: 0,
    elevation: 10, // j'ajoute de l'élévation pour Android
    shadowOpacity: 0.25, // Opacité de l'ombre pour iOS
    shadowOffset: { width: 0, height: 2 }, // Décalage de l'ombre pour iOS
    shadowRadius: 4, // Rayon de l'ombre pour iOS
    height: hp("10%"),
    backgroundColor: COLORS.background,
  };

  // Composant pour l'icône d'aide à droite du titre de l'en-tête
  const HeaderRightComponent = () => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: wp("5%"),
      }}
      onPress={() => {
        navigation.navigate('Aide')
      }}
    >
      <FontAwesome
        name="question-circle"
        size={20}
        color="#FFFFFF"
        style={{ marginRight: wp("2%") }}
      />
      <Text
        style={{ fontSize: 16, fontFamily: "Roboto-Bold", color: "#FFFFFF" }}
      >
        Aide
      </Text>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let labelName;
          if (route.name === "Accueil") {
            iconName = focused ? "home" : "home-outline";
            labelName = "Accueil";
          } else if (route.name === "Rendez-vous") {
            iconName = focused ? "calendar" : "calendar-outline";
            labelName = "Rendez-vous";
          } else if (route.name === "Messages") {
            iconName = focused ? "chatbox" : "chatbox-outline";
            labelName = "Messages";
          } else if (route.name === "Documents") {
            iconName = focused ? "document" : "document-outline";
            labelName = "Documents";
          } else if (route.name === "Connexion") {
            iconName =
              isLoggedIn && focused
                ? "person"
                : focused
                ? "person"
                : "person-outline";
            labelName = isLoggedIn ? "Compte" : "Connexion";
          }

          return (
            <TabBarIcon 
              focused={focused}
              name={iconName}
              color={color}
              size={iconSize}
              label={labelName}
            />
          );
        },
        tabBarLabel: ({ focused, color }) => {
          let labelName;
          if (route.name === "Connexion" && isLoggedIn) {
            labelName = "Compte";
          } else {
            labelName = route.name;
          }
        },
        headerTitle: "", // Masque le texte de titre en haut
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#666666",
        tabBarLabelStyle: tabBarLabelStyle,
        tabBarStyle: tabBarStyle,
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen
        name="Rendez-vous"
        component={AppointmentScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleAlign: "left",
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontSize: 18, fontFamily: "Roboto-Bold" },
          headerTitle: () => (
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Roboto-Bold",
                color: "#FFFFFF",
                marginLeft: wp("1%"),
              }}
            >
              Mes rendez-vous
            </Text>
          ), // Composant de titre personnalisé
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleAlign: "left",
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontSize: 18, fontFamily: "Roboto-Bold" },
          headerTitle: () => (
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Roboto-Bold",
                color: "#FFFFFF",
                marginLeft: wp("1%"),
              }}
            >
              Mes messages
            </Text>
          ), // Composant de titre personnalisé
        }}
      />
      <Tab.Screen
        name="Documents"
        component={Documentsscreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleAlign: "left",
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontSize: 18, fontFamily: "Roboto-Bold" },
          headerTitle: () => (
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Roboto-Bold",
                color: "#FFFFFF",
                marginLeft: wp("1%"),
              }}
            >
              Mes documents
            </Text>
          ), // Composant de titre personnalisé
        }}
      />
      <Tab.Screen
        name="Connexion"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitleAlign: "left",
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontSize: 18, fontFamily: "Roboto-Bold" },
          headerTitle: () => (
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Roboto-Bold",
                color: "#FFFFFF",
                marginLeft: wp("1%"),
              }}
            >
              Connexion
            </Text>
          ), // Composant de titre personnalisé
          headerRight: () => <HeaderRightComponent />, // Ajout de l'icône d'aide à droite du titre
        }}
      />
    </Tab.Navigator>
  );
}
