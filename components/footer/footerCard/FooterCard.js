import { Text, View, Image } from 'react-native';
import React from 'react';
import { ScaledSheet } from "react-native-size-matters";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { COLORS, IMGS } from "@/store/constants";
import Button from '../../Button/Button';

const FooterCard = () => {
    // Fonction pour devenir preminium
    const handlePress = () => {
        console.log("Je suis devenu preminium");
      };
  return (
    <View style={[styles.container]}>
        <View style={[styles.content]}>
        <Image source={IMGS.ImageFamille} style={styles.image} />
        <Text style={[styles.title]}>Abonnement Premimium</Text>
        <Text style={[styles.subtitle]}>Découvrez SenDoctor+ pour avoir plus de fonctionnalité</Text>
        <Button
          title="DECOUVRIR SENDOCTOR+"
          onPress={handlePress}
          type="primary"
        />
        </View>
    </View>
  )
}

export default FooterCard;

const styles = ScaledSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        alignItems: "center",
        alignContent: "center",
        padding: wp('4%'),
        width: wp('92%'),
        marginHorizontal: wp("4%"),
        marginVertical: hp("2%"),
        marginTop: ("1%"),
        borderRadius: "8@ms",
        elevation: 5,
    },
    content: {
        alignContent: "center",
        alignItems: "center",
    },
    image: {
        width: wp("66%"),
        height: wp("35%"),
      },
    title: {
        textAlign: "center",
        fontSize: "14@s",
        fontFamily: "Roboto-Bold",
        color: COLORS.white,
        marginTop: hp('2.5%'),
    },
    subtitle: {
        textAlign: "center",
        fontSize: "12@s",
        fontFamily: "Roboto-Medium",
        color: COLORS.white,
        marginVertical: hp('1.5%'),
        lineHeight: hp("2.5%"),
    },
})