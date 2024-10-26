import React from "react";
import { View, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { COLORS } from "@/store/constants";
import { ScaledSheet } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ContactLabel = ({ phoneNumber }) => (
  <View style={styles.contactLabelContainer}>
    <FontAwesome6 name="square-phone-flip" size={18} color={COLORS.secondary} />
    <Text style={styles.contactLabel}>(+221) {phoneNumber}</Text>
  </View>
);

const styles = ScaledSheet.create({
  contactLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -hp("9.5%"),
    marginBottom: hp("4%"),
  },
  contactLabel: {
    fontSize: "12@s",
    fontFamily: "Roboto-Medium",
    marginLeft: wp("1%"),
    //textAlign: "center",
    //bottom: 50,
  },
});

export default ContactLabel;
