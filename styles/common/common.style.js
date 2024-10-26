/**
 * @file common.style.js
 * @description Fichier contenant des styles réutilisables pour l'application.
 * @module commonStyles
 * 
 * @see https://github.com/votre-repo/myapp
 */

import { ScaledSheet } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";

const commonStyles = ScaledSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginVertical: -hp("4%"),
  },
  content: {
    flex: 1,
    padding: 20,
    marginVertical: hp("9%"),
  },
  title: {
    fontFamily: "Roboto-Medium",
    color: COLORS.textPrimary,
    paddingVertical: hp("2%"),
  },
  label: {
    fontSize: "14@s",
    fontFamily: "Roboto-Bold",
    marginBottom: hp("0.9%"),
  },
  subTitle: {
    textAlign: "center",
    color: COLORS.textSecondary,
    fontFamily: "Roboto-Regular",
    lineHeight: hp("2%"), // Espacement entre les lignes de texte
  },
  subLabel: {
    marginTop: hp("2%"),
    fontFamily: "Roboto-Regular",
    fontSize: "12@s",
  },
  image: {
    width: wp("18%"),
    height: wp("18%"),
  },
  button: {
    padding: "10@ms",
    backgroundColor: COLORS.primary,
    borderRadius: "8@ms",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    maxWidth: 400,
    marginVertical: hp('1%'),
  },
  icon: {
    marginRight: wp('2%'),
  },
  iconRight: {
    marginLeft: wp('2%'),
  },
  input: {
    flex: 1,
  },
  buttonInputField: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonTextInputField: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorInput: {
    borderColor: COLORS.error,
  },
  errorText: {
    color: COLORS.error,
    fontSize: "11@s",
    fontFamily: "Roboto-Thin",
  },
  progressBar: {
    marginVertical: hp("1.2%"),
    marginBottom: hp("0.2%"),
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("0.9%"),
  },
});

export default commonStyles;
