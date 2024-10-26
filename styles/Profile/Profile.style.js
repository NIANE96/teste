import { ScaledSheet } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";

const ProfileStyle = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingVertical: -hp('3.9%'),
  },
  profileContent: {
    padding: wp('2.5%'),
  },
  content: {
    backgroundColor: '#D1F2EB',
    height: hp('18%'),
    borderRadius: '5@s',
    padding: '16@s',
  },
  row: {
    flexDirection: 'row',
    marginBottom: hp('1%'),
  },
  title: {
    fontFamily: 'Roboto-Regular',
  },
  signUpContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: hp('1.6%'),
  },
  signUpBtn: {
    marginLeft: wp('1.5%'),
  },
  signUpBtnText: {
    fontSize: '12@s',
    fontFamily: 'Roboto-Bold',
    color: COLORS.primary,
  },
  label: {
    fontSize: '12@s',
    fontFamily: 'Roboto-Regular',
  },
  flagImage: {
    width: wp('6%'),
    height: hp('2%'),
    //marginBottom: 20,
    marginLeft: wp('18%')
  },
  settingContent: {
    height: hp('16%'),
    marginVertical: hp('1.8%'),
  },
  labelSetting: {
    fontFamily: 'Roboto-Bold',
    fontSize: '13@s',
    color: COLORS.primary,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countrySettingContinent: {
    marginBottom: -hp('0.4%'),
  },
  countrySetting: {
    flexDirection: 'row',
    paddingHorizontal: wp('2%'),
    marginTop: -hp('0.5%'),
  },
  country: {
    marginLeft: wp('1.5%'),
  },
  separator: {
    height: 1,
    backgroundColor: '#D1F2EB',
    marginVertical: '10@s',
  },
  labelCountry: {
    fontSize: '11@s',
    fontFamily: 'Roboto-Bold',
    marginTop: hp('0.1%'),
  },
  Sublabel: {
    fontSize: '10@s',
    fontFamily: 'Roboto-Regular',
    color: COLORS.primary,
    marginTop: hp('0.2%'),
    paddingHorizontal: wp('7.5%'),
  },
  labelVersionContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -hp('2%',)
  },
  preferency: {
    flexDirection: 'row',
    marginLeft: wp('1.5%'),
  },
  labelVersion: {
    fontSize: '12@s',
    fontFamily: 'Roboto-Medium',
    color: COLORS.primary,
  },
  iconleft: {
    marginRight: wp('2%'),
  },
  ScrollView: {
    width: wp('202%'),
  },

  // Styles Popup
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalDescription: {
    marginVertical: hp('2%'),
    textAlign: 'center',
  },
});

export default ProfileStyle;
