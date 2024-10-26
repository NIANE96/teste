import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";

import MainStackNavigator from "./navigation/navigators/MainStackNavigator";
import { AuthProvider } from "./store/context/AuthContext";

// Pour le chargement des images et fonts
const cacheImages = (images) => {
  return images.map((image) => Asset.fromModule(image).downloadAsync());
};

const loadResourcesAsync = async () => {
  const imageAssets = cacheImages([
    require("./assets/images/icons/desktop_7961188.png"),
    require("./assets/images/icons/doctor.png"),
    require("./assets/images/icons/folder_7961160.png"),
    require("./assets/images/icons/medical-report_7961179.png"),
    require("./assets/images/icons/pharmacy.png"),
    require("./assets/images/imgs/calendar.png"),
    require("./assets/images/imgs/folder.png"),
    require("./assets/images/imgs/image3.webp"),
    require("./assets/images/imgs/image4.webp"),
    require("./assets/images/imgs/image_f.png"),
    require("./assets/images/imgs/message.png"),
    require("./assets/images/icons/mali.png"),
    require("./assets/images/icons/senegal.png"),
  ]);

  await Promise.all([...imageAssets]);
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded, error] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // Empêche le SplashScreen de se masquer automatiquement
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    const prepare = async () => {
      try {
        await loadResourcesAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!fontsLoaded || !isReady) {
    return null; // Ou affichez un indicateur de chargement personnalisé ici
  }

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
