import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "@/store/constants";
import { ScaledSheet } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const NameLabel = ({ firstName, lastName }) => (
  <View style={styles.nameLabelContainer}>
    <FontAwesome name="user-circle-o" size={18} color={COLORS.secondary} />
    <Text style={styles.nameLabel}>
      {firstName} {lastName}
    </Text>
  </View>
);

const styles = ScaledSheet.create({
  nameLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -hp("2.8%"),
    marginBottom: hp("4%"),
  },
  nameLabel: {
    fontSize: "12@s",
    fontFamily: "Roboto-Medium",
    marginLeft: wp("1%"),
    //textAlign: "center",
    //bottom: 50,
  },
});
export default NameLabel;
