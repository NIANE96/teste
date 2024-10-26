/**
 * @file FakeMain.style.js
 * @description Styles pour le composant FakeMain.
 * @module FakeMainStyle
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
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginVertical: hp("1%"),
  },
  maintitle: {
    fontSize: "12@s",
    fontFamily: "Roboto-Bold",
    color: COLORS.textPrimary,
    paddingVertical: hp("2%"),
  },
  contentImgsContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  contentImgsTitle: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp("1.5%"),
  },
  image: {
    width: wp("18%"),
    height: wp("18%"),
  },
  subTitleContainer: {
    marginVertical: hp("2%"),
  },
  subTitle: {
    textAlign: "center",
    color: COLORS.textSecondary,
    fontFamily: "Roboto-Regular",
    lineHeight: hp("2%"), // Espacement entre les lignes de texte
  },
  policyContainer: {
    alignItems: "center",
    alignContent: "center",
    padding: wp('4%'),
    width: wp('92%'),
    marginHorizontal: wp("2%"),
    marginVertical: hp("1%"),
    borderRadius: "8@ms",
    backgroundColor: COLORS.blue,
    elevation: 5,
  },
  policyImage: {
    width: wp("55%"),
    height: hp("18%"),
    bottom: hp("2%"),
  },
});

export default styles;
