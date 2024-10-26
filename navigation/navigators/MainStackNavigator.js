import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import MainTabNavigator from "./MainTabNavigator";
import { COLORS } from "@/store/constants";
import customTransitionConfig from "@/utils/TransitionConfig/TransitionConfig";

import HomeDoctorScreen from "../screens/ServicesLists/Home.doctor.screen";
import MedicalRecordScreen from "../screens/ServicesLists/Medical.record.screen";
import PharmacyScreen from "../screens/ServicesLists/Pharmacy.screen";
import PreliminaryCareScreen from "../screens/ServicesLists/Preliminary.care.screen";
import TeleconsultationScreen from "../screens/ServicesLists/Teleconsultation.screen";
import HelpsScreen from "../screens/profile/Helps/Helps.screen";
import PreferencesScreen from "../screens/profile/Preferences/Preferences.screen";
import LegalInformationScreen from "../screens/profile/LegalInformation/LegalInformation.screen";
import PdfViewer from "@/components/PdfViewer/PdfViewer";
import LoginScreen from "../screens/auth/Login.screen";
import { AuthContext } from "@/store/context/AuthContext";
import SignupScreen from "../screens/auth/Signup.screen";
import VerifyAccountScreen from "../screens/auth/VerifyAccount/VerifyAccount.screen";
import SearchScreen from "../screens/SearchScreen/PractitionerSearch.screen";
import PractitionerSearchScreen from "../screens/SearchScreen/PractitionerSearch.screen";

const Stack = createStackNavigator();

const screenOptionsWithHeader = (title, navigation) => ({
  headerTitle: title,
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialIcons
        name="arrow-back-ios"
        size={20}
        color={COLORS.white}
        style={{ marginLeft: 15 }}
      />
    </TouchableOpacity>
  ),
  headerStyle: {
    backgroundColor: "#008080",
    height: hp("10%"), // J'ajuste la hauteur en mode paysage
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    alignSelf: "center",
  },
  ...customTransitionConfig,
});

export default function MainStackNavigator() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName={"MainTabs"}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#008080",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{ headerShown: false }} // Cache le header pour le TabNavigator
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
        // options={({ navigation }) =>
        //   screenOptionsWithHeader("Inscription", navigation)
        // }
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
        // options={({ navigation }) =>
        //   screenOptionsWithHeader("Connexion", navigation)
        // }
      />
        <Stack.Screen
        name="Verification"
        component={VerifyAccountScreen}
        options={{ headerShown: false }}
        // options={({ navigation }) =>
        //   screenOptionsWithHeader("Connexion", navigation)
        // }
      />
      <Stack.Screen
        name="MedecinDomicile"
        component={HomeDoctorScreen}
        options={({ navigation }) =>
          screenOptionsWithHeader("Médecin à domicile", navigation)
        }
      />
      <Stack.Screen
        name="DossierMedical"
        component={MedicalRecordScreen}
        options={({ navigation }) =>
          screenOptionsWithHeader("Dossier Médical", navigation)
        }
      />
      <Stack.Screen
        name="Pharmacie"
        component={PharmacyScreen}
        options={({ navigation }) =>
          screenOptionsWithHeader("Pharmacie", navigation)
        }
      />
      <Stack.Screen
        name="Telediagnostic"
        component={PreliminaryCareScreen}
        options={({ navigation }) =>
          screenOptionsWithHeader("Télédiagnostic", navigation)
        }
      />
      <Stack.Screen
        name="Teleconsultation"
        component={TeleconsultationScreen}
        options={({ navigation }) =>
          screenOptionsWithHeader("Téléconsultation", navigation)
        }
      />
      <Stack.Screen
        name="Aide"
        component={HelpsScreen}
        options={({ navigation }) =>
          screenOptionsWithHeader("Centre d'aide", navigation)
        }
      />
      <Stack.Screen
        name="Preferences"
        component={PreferencesScreen}
        options={({ navigation }) =>
          screenOptionsWithHeader("Mes préférences", navigation)
        }
      />
      <Stack.Screen
        name="Legal_Informations"
        component={LegalInformationScreen}
        options={({ navigation }) =>
          screenOptionsWithHeader("Informations légales", navigation)
        }
      />
      <Stack.Screen
        name="PdfViewer"
        component={PdfViewer}
        // options={({ navigation }) =>
        //   screenOptionsWithHeader("Informations légales", navigation)
        // }
      />

     <Stack.Screen name="PractitionerSearch" component={PractitionerSearchScreen} options={{ title: 'Search Practitioner' }} />
    </Stack.Navigator>
  );
}
