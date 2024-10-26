/**
 * @file CustomCardStyles.js
 * @description Styles pour le composant CustomCard.
 * @module CustomCardStyles
 *
 * @authors
 * - NIANE Adoulaye (ablayeniane658@gmail.com)
 *
 * @maintainer NIANE Abdoulaye (ablayeniane658@gmail.com)
 *
 * @see https://github.com/NIANE96/Projet_SenDoctor_01
 */

import { ScaledSheet } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";

const styles = ScaledSheet.create({
  cardContainer: {
    width: wp("100%"),
    paddingVertical: hp("30%"),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  cardImage: {
    width: wp("26%"),
    height: hp("12%"),
  },
  cardTitle: {
    fontSize: "13@s",
    fontFamily: "Roboto-Bold",
    color: COLORS.textPrimary,
    textAlign: "center",
    marginVertical: hp("2%"),
  },
  cardSubTitle: {
    fontSize: "12@s",
    fontFamily: "Roboto-Regular",
    color: COLORS.textSecondary,
    textAlign: "center",
    marginHorizontal: wp("8%"),
    marginBottom: hp('1%'),
  },
});

export default styles;
