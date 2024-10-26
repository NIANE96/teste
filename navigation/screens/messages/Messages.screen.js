import { SafeAreaView, Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import React, { useContext } from "react";

import {IMGS, COLORS } from "@/store/constants";
import { AuthContext } from "@/store/context/AuthContext";
import CustomCard from "@/components/FakeMain/CustomCard/CustomCard";
import { dataText } from "@/data/Fake.data";

export default function MessagesScreen() {

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <SafeAreaView
      style={[styles.container,]}>
      {!isLoggedIn ? (
        <>
          <View style={styles.content}>
            <CustomCard
              imageSource={IMGS.ImageChat}
              title={dataText.titleMessage}
              subTitle={dataText.subTitleMessage}
              // onPress={handleLogin}
            />
          </View>
        </>
      ) : (
        <></>
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
    alignContent: 'center',
    alignItems: 'center',
  },
});
