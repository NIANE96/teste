import { Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "@/store/constants";
import PraticiensCard from "./PraticiensCard";

const PraticiensList = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>
        Mes praticiens <Text style={styles.history}>(Historique)</Text>
      </Text>
      <PraticiensCard
          imageUri="https://via.placeholder.com/150"
          hospitalName="Centre Hospitalier de Dakar (hôptal)"
          hospitalType="Hôpital public"
          showVideoIcon={false} // True pour afficher l'icône vidéo
        />
          <PraticiensCard
          imageUri="https://via.placeholder.com/150"
          hospitalName="Dr Arona Ba"
          hospitalType="Médecin généraliste"
          showVideoIcon={true} // True pour afficher l'icône vidéo
        />
    </View>
  );
};

export default PraticiensList;

const styles = ScaledSheet.create({
  container: {
    padding: wp('3.5%'),
    marginTop: hp("1.8%"),
  },
  title: {
    fontSize: "15@s",
    fontFamily: "Roboto-Bold",
    color: COLORS.secondary,
    marginBottom: hp("2%"),
  },
  history: {
    fontSize: "11@s",
    fontFamily: "Roboto-Medium",
    color: COLORS.primary,
    marginLeft: "5@s",
  },
});
