import {Text, View, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ScaledSheet } from 'react-native-size-matters'; 
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";

const PraticiensCard = ({ imageUri, hospitalName, hospitalType, showVideoIcon }) => {
  return (
    <View style={styles.card}>
    <Image
      source={{ uri: imageUri }}
      style={styles.image}
      resizeMode="cover"
    />
    <View style={styles.cardContent}>
      <Text style={styles.hospitalName}>{hospitalName}</Text>
      <View style={{flexDirection: "row"}}>
      {showVideoIcon && (
        <FontAwesome
          name="video-camera"
          size={14}
          color={COLORS.primary}
          style={styles.videoIcon}
        />
      )}
      <Text style={styles.hospitalType}>{hospitalType}</Text>
      </View>
    </View>
  </View>
  )
}

export default PraticiensCard

const styles = ScaledSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: '8@s',
        marginHorizontal: wp("1%"),
        marginVertical: hp("1%"),
        marginTop: -hp("1%"),
        marginBottom: hp('3.5%'),
        borderRadius: '10@s',
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: '2@s' },
        shadowOpacity: 0.1,
        shadowRadius: '4@s', 
        elevation: 2,
      },
      image: {
        width: wp("13%"),
        height: hp("6%"),
        borderRadius: '35@s', 
      },
      cardContent: {
        marginLeft: '10@s', 
        flex: 1,
      },
      hospitalName: {
        fontSize: '12@s', 
        fontFamily: "Roboto-Bold",
        lineHeight: hp("3.2%"),
      },
      hospitalType: {
        fontSize: '12@s', 
        fontFamily: "Roboto-Regular",
        color: COLORS.textSecondary,
      },
      videoIcon: {
        marginTop: hp("0.2%"),
        marginRight: "10@s",
      },
})