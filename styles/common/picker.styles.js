import { ScaledSheet } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";

const PickerStyles = ScaledSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    countryPickerContainer: {
      width: wp("88%"),
      height: hp("50%"),
      //backgroundColor: '#fff',
      backgroundColor: COLORS.background,
      borderRadius: '10@ms',
      padding: '20@ms',
    },
    searchInput: {
      height: '40@ms',
      borderColor: COLORS.gray_3,
      borderWidth: 1,
      borderRadius: '5@ms',
      marginBottom: '10@ms',
      paddingHorizontal: '10@ms',
    },
    countryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: '10@ms',
      borderBottomWidth: 1,
      borderBottomColor: COLORS.bluegrey,
      //borderBottomColor: '#ddd',
    },
    flagImage: {
      width: wp("7%"),
      height: hp("2%"),
      marginRight: wp("2.5%"),
    },
    countryText: {
      fontSize: '14@ms',
      fontFamily: "Roboto-Regular",
      color: COLORS.primary,
    },
    button: {
      marginTop: hp("1.5%"),
      backgroundColor: COLORS.primary,
      padding: '10@ms',
      borderRadius: '5@ms',
    },
    buttonText: {
      color: COLORS.white,
      fontFamily: "Roboto-Bold",
      textAlign: 'center',
    },
  });

  export default PickerStyles;
  