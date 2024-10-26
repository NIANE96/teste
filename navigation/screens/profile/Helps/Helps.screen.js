import { Text, View } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";

export default function HelpsScreen() {
  return (
    <View style={styles.container}>
      <Text>Centre d'aide</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
