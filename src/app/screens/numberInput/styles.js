import {StyleSheet} from 'react-native';
import {COLORS} from '../../../res/colors';
import {Fonts} from '../../../res/fonts';
import {
  useFontScale,
  usePercentageHeight,
  usePercentageWidth,
} from '../../hooks/responsive';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // marginTop:insets.top
  },
  headerContainer: {
    backgroundColor: COLORS.black,
    height:usePercentageHeight(7)
  },
  contentContainer: {
    width: usePercentageWidth(90),
    alignSelf: 'center',
    marginBottom: usePercentageHeight(5),
  },
  iconContainer: {
    height: usePercentageHeight(5),
    width: usePercentageHeight(5),
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: usePercentageHeight(3),
  },
  title: {
    fontFamily: Fonts.playFair,
    fontSize: useFontScale(30),
    color: COLORS.black,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countryCodeContainer: {
    width: usePercentageWidth(27),
    borderWidth: 1,
    height: usePercentageHeight(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 7,
  },
  flagIcon: {
    fontSize: useFontScale(15),
    textAlign: 'center',
  },
  countryCodeText: {
    fontSize: useFontScale(20),
    color: COLORS.black,
    fontFamily: Fonts.Roboto_Bold,
  },
  phoneNumberInputContainer: {
    width: usePercentageWidth(60),
    borderBottomWidth: 3.5,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRadius: 7,
    height: usePercentageHeight(7),
    justifyContent: 'center',
    paddingLeft: 10,
  },
  phoneNumberInput: {
    fontSize: useFontScale(23),
    color: COLORS.black,
    fontFamily: Fonts.Roboto_Regular,
  },
  descriptionContainer: {
    alignSelf: 'center',
    marginTop: 5,
    width: usePercentageWidth(90),
  },
  description: {
    color: COLORS.black,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: useFontScale(14),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  securityInfoContainer: {
    height: usePercentageHeight(9),
    width: usePercentageWidth(95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  securityInfoText: {
    color: COLORS.black,
  },
  nextButton: {
    height: usePercentageHeight(7),
    width: usePercentageHeight(7),
    borderRadius: 100,
    // backgroundColor: COLORS.themeYellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
