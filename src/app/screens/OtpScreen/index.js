import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../../../res/colors';
import Header from '../../components/header';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  useFontScale,
  usePercentageHeight,
  usePercentageWidth,
} from '../../hooks/responsive';
import Space from '../../hooks/Space';
import {Fonts} from '../../../res/fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const OtpScreen = () => {
  const insets=useSafeAreaInsets()
  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 1, backgroundColor: COLORS.white,marginTop:insets.top}}>
      {/* <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content" // or 'light-content' depending on your preference
        /> */}
        <Header headerContainerStyle={{backgroundColor: COLORS.black}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'red',
            // paddingHorizontal:10
          }}>
          <Space width={usePercentageWidth(2)} />
          <Octicons
            name={'dot-fill'}
            size={useFontScale(14)}
            color={COLORS.black}
          />
          <Space width={usePercentageWidth(3)} />
          <View
            style={{
              height: usePercentageHeight(5),
              width: usePercentageHeight(5),
              //   backgroundColor: 'pink',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1.3,
              borderRadius: 100,
            }}>
            <Ionicons
              name={'shield-checkmark-outline'}
              size={useFontScale(24)}
              color={COLORS.black}
            />
          </View>
        </View>
        <View
          style={{
            width: usePercentageWidth(93.3),
            backgroundColor: 'red',
            alignSelf: 'flex-end',
            marginTop: usePercentageHeight(1),
          }}>
          <Text
            style={{
              fontSize: useFontScale(30),
              fontFamily: Fonts.playFair,
              fontWeight: 'bold',
              color: COLORS.black,
            }}>{`Enter your verification\ncode`}</Text>
          <View style={{marginTop: usePercentageHeight(2)}}>
            <Text
              style={{
                fontFamily: Fonts.Roboto_Regular,
                fontSize: useFontScale(15),
                color: COLORS.black,
              }}>
              {`Enter the code we've sent by text to\n+918700125327.`}
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontWeight: '700',
                    textAlign: 'center',
                    color: COLORS.black,
                  }}>
                  {` Change number`}
                </Text>
              </TouchableOpacity>
            </Text>
          </View>

        </View>
        {/* <Space width={usePercentageWidth(20)}/> */}
        <View style={{backgroundColor:'blue',height:usePercentageHeight(6),width:usePercentageWidth(10)}}>
            <TextInput style={{fontSize:useFontScale(20)}}/>
        </View>
      </View>
    // </SafeAreaView>
  );
};
const styles=StyleSheet.create({

})
export default OtpScreen;
