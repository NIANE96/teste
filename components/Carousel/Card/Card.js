import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";

const Card = ({ title, description, imageUrl, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      delayPressIn={0}
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Image source={imageUrl} style={styles.image} />
        <View style={styles.textContainer}>
          {/* <Text style={styles.title}>{title}</Text> */}
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  card: {
    backgroundColor: COLORS.secondary,
    borderRadius: "10@s",
    marginHorizontal: wp("2%"),
    marginVertical: hp("1%"),
    width: '300@s',
    height: '108@s', // Hauteur du Card réduite
    // padding: "8@s",
    shadowColor: "rgba(120, 144, 156, 0.2)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: wp("30%"),
    height: hp("14.4%"),
    borderRadius: "8@s",
    flexShrink: 0,
  },
  description: {
    fontSize: "11@s",
    fontFamily: "Roboto-Regular",
    color: COLORS.white,
    textAlign: 'left',
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: wp("3%"),
    marginRight: wp("2%"),
  },
});

export default Card;
