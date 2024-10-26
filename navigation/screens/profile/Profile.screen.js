import React, { useContext, useState } from "react";
import { Button, SafeAreaView, ScrollView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "@/store/constants";
import ProfileStyle from "@/styles/Profile/Profile.style";
import ProfileContent from "../../screens/profile/ProfileContent/ProfileContent";
import { AuthContext } from "@/store/context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={[ProfileStyle.container]}>
      {isLoggedIn ? (
        <Button title="Deconexion" onPress={logout} />
      ) : (
        <>
          <ProfileContent />
        </>
      )}
    </SafeAreaView>
  );
}

