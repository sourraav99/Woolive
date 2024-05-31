import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../res/colors';
import {usePercentageWidth} from '../../hooks/responsive';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Header from '../../components/header';
import Space from '../../hooks/Space';
import styles from './styles';
import OtpScreen from '../OtpScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NumberInput = ({route}) => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [flag, setFlag] = useState('🇮🇳'); // Default flag for India
  const [dialCode, setDialCode] = useState('+91'); // Default dial code for India
  //  const { flag, dialCode } = route.params || {};
  const insets=useSafeAreaInsets()

  const handleCountrySelect = (selectedFlag, selectedDialCode) => {
    setFlag(selectedFlag);
    setDialCode(selectedDialCode);
  };
  // console.log(flag, dialCode);
  // console.log(input);
  return (
    // <SafeAreaView style={styles.container}>
      <View style={[styles.container]}>
        <View style={{height:insets.top}}/>
      {/* <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content" // or 'light-content' depending on your preference
        /> */}
        <Header headerContainerStyles={styles.headerContainer} />
        <View style={[styles.contentContainer]}>
          <View style={styles.iconContainer}>
            <Feather name="phone-call" size={22} color={COLORS.black} />
          </View>
          <Text style={styles.title}>{`What's your phone\nnumber?`}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('countryPicker', {
                // Pass callback function to CountryPicker
                onSelectCountry: handleCountrySelect,
              });
            }}
            style={styles.countryCodeContainer}>
            <Text style={styles.flagIcon}>{flag}</Text>
            <Text style={styles.countryCodeText}>{dialCode}</Text>
            <Feather name={'chevron-down'} size={20} color={COLORS.black} />
          </TouchableOpacity>
          <Space width={usePercentageWidth(5)} />
          <View style={styles.phoneNumberInputContainer}>
            <TextInput
              placeholder=""
              style={styles.phoneNumberInput}
              selectionColor={COLORS.themeYellow}
              multiline
              keyboardType="numeric"
              value={input}
              onChangeText={text => {
                setInput(text);
              }}
            />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text
            style={
              styles.description
            }>{`We only use phone number to make sure everyone\non WooLive is real.`}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.securityInfoContainer}>
            <Fontisto name="locked" size={25} color={COLORS.black} />
            <Text
              style={
                styles.securityInfoText
              }>{`We never share this with anyone and it\nwon't be on your profile`}</Text>
            <TouchableOpacity
            onPress={()=>{navigation.navigate("Otp")}}
              activeOpacity={input.length > 0 ? 0.8 : 1}
              // disabled={input.length === 0}
              style={[
                styles.nextButton,
                {
                  backgroundColor:
                    input.length > 0 ? COLORS.themeYellow : COLORS.lightGrey,
                },
              ]}>
              <Feather name="chevron-right" size={25} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height:insets.bottom}}/>
      </View>
    // </SafeAreaView>
  );
};

export default NumberInput;
