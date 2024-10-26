/**
 * @file common.style.uth.js
 * @description Fichier contenant des styles réutilisables pour l'application.
 * @module commonStylesAuth
 * 
 * @see https://github.com/votre-repo/myapp
 */

import { ScaledSheet } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";

const commonStylesAuth = ScaledSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical: hp("9%"),
      },
      label: {
        fontSize: "14@s",
        fontFamily: "Roboto-Bold",
        marginBottom: hp("0.9%"),
      },
      subLabel: {
        marginTop: hp("2%"),
        fontFamily: "Roboto-Regular",
        fontSize: "12@s",
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.gray_2,
        borderRadius: 5,
        padding: 10,
        width: "100%",
        maxWidth: 400,
      },
      inputText: {
        fontSize: "14@s",
        fontFamily: "Roboto-Regular",
        width: "90%",
        color: COLORS.textPrimary,
      },
      inputForm: {
        marginTop: hp("2%"),
      },
      birthDateContent: {
        marginTop: hp("1.8%"),
      },
      btnContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: COLORS.gray_2,
        borderRadius: 5,
        padding: 10,
        zIndex: 1,
        maxWidth: 400,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      datePickerContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        width: '80%',
      },
      button: {
        marginTop: hp("2%"),
        padding: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
      },
      buttonText: {
        color: COLORS.white,
        fontSize: "14@s",
        fontFamily: "Roboto-Bold",
      },
      prefix: {
        fontSize: "14@s",
        fontFamily: "Roboto-Regular",
        marginLeft: wp("1%"),
        marginRight: wp("1%"),
      },
      genderContainer: {
        flexDirection: "row",
      },
      progressBar: {
        marginVertical: hp("2.2%"),
        marginBottom: hp("0.2%"),
      },
      isPasswordVisibleButton: {
        left: -wp("1.5%")
      },
      signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      errorInput: {
        borderColor: COLORS.error,
      },
      errorText: {
        color: COLORS.error,
        fontSize: "11@s",
        fontFamily: "Roboto-Thin",
        marginTop: hp("0.5%"),
        //marginBottom: hp('0.8'),
      },
});

export default commonStylesAuth;
