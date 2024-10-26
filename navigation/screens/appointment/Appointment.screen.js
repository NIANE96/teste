import { Text, View, SafeAreaView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import React, { useContext } from "react";

import { IMGS, COLORS } from "@/store/constants";
import { AuthContext } from "@/store/context/AuthContext";
import CustomCard from "@/components/FakeMain/CustomCard/CustomCard";
import { dataText } from "@/data/Fake.data";

export default function AppointmentScreen() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <SafeAreaView style={[styles.container]}>
      {!isLoggedIn ? (
        <>
          <View style={styles.content}>
            <CustomCard
              imageSource={IMGS.ImageCalendar}
              title={dataText.titleAppointment}
              subTitle={dataText.subTitleAppointment}
              // onPress={handleLogin}
            />
          </View>
        </>
      ) : (
        <><Text>Je suis connecter</Text></>
      )}
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    alignContent: "center",
    alignItems: "center",
  },
});
