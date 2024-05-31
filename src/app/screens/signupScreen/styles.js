import {Fonts} from '../../../res/fonts';
import {COLORS} from '../../../res/colors';
import {useFontScale, usePercentageHeight, usePercentageWidth} from '../../hooks/responsive';

const styles = {
  screenGradient: {
    height: '100%',
  },
  SafeAreaView: {
    flex: 1,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1.3,
  },
  container2: {
    alignItems: 'center',
    flex: 1,
  },
  wooliveText: {
    fontFamily: Fonts.Roboto_Bold,
    fontSize: 30,
    color: COLORS.themeYellow,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.Roboto_Bold,
    fontSize: useFontScale(45),
    color: COLORS.themeYellow,
  },
  facebookSigningBtnContainer: {
    height: usePercentageHeight(7),
    backgroundColor: COLORS.facebook_blue,
    width: usePercentageWidth(90),
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: usePercentageWidth(10),
    marginBottom: usePercentageHeight(2),
  },
  facebookSigningBtnText: {
    paddingHorizontal: usePercentageWidth(5),
    color: COLORS.white,
    fontSize: 18,
    fontFamily: Fonts.Roboto_Medium,
  },
  mobileNumberButtonContainer: {
    height: usePercentageHeight(7),
    backgroundColor: COLORS.black,
    width: usePercentageWidth(90),
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: usePercentageHeight(9.5),
  },
  mobileNumberButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: Fonts.Roboto_Medium,
  },
  termsAndPrivacyPolicyTextContainer:{
    alignItems: 'center'
  },
  parentText:{
    textAlign: 'center', color: COLORS.white
  },
  childrenText:{
    textDecorationLine: 'underline',
    color: COLORS.white,
  }
};

export default styles;
