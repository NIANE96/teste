import { ScrollView, Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { COLORS } from "@/store/constants";
import FadeInView from "@/components/FadeInView/FadeInView";
import MyStatusBar from "@/components/Header/MyStatusBar/MyStatusBar";
import Header from "@/components/Header/Header";
import Carousel from "@/components/Carousel/Carousel";
import FakeMain from "@/components/FakeMain/FakeMain";
import { AuthContext } from "@/store/context/AuthContext";
import NextAppointmentsList from "../appointment/NextAppointments/NextAppointmentsList";
import PraticiensList from "@/components/PraticiensList/PraticiensList";
import FooterCard from "@/components/footer/footerCard/FooterCard";

export default function HomeScreen() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <View style={[styles.container]}>
      <MyStatusBar backgroundColor={COLORS.primary} />
      <ScrollView style={styles.scrollView}>
        <View style={[styles.content]}>
          {/* Mon Header */}
          {isLoggedIn ? (
            <>
              <Header />
              <Carousel />
              <NextAppointmentsList />
              <PraticiensList />
              <FooterCard />
            </>
          ) : (
            <>
              <Header />
              <View style={{ marginTop: -68 }}>
                <Carousel />
              </View>
              <FakeMain />
            </>
          )}
        </View>
      </ScrollView>
      <View style={[styles.header]}>
        {/* Contenu de votre header */}
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: hp("30%"),
    backgroundColor: COLORS.primary,
    zIndex: 0,
  },
  scrollView: {
    flex: 1,
    zIndex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.background,
    //paddingBottom: -hp("10%"), // Ajouter du padding en bas adaptatif pour le défilement
  },
});
