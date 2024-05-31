import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {usePercentageHeight, usePercentageWidth} from '../hooks/responsive';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../res/colors';

const Header = ({
  onpress,
  icon,
  headerText,
  headerTextStyle,
  headerContainerStyle,
  headerTextonPress,
  headerTextViewStyle = {},
  imgStyle = {},
  backbtnstyles,
  resizee,
  fontName,
  fontStyle = {},
  fontSize,
  fontColor,
}) => {
  return (
    <View style={{...styles.headerContainer, ...headerContainerStyle}}>
      {!!icon ? (
        <TouchableOpacity
          style={{...styles.backbtn, ...backbtnstyles}}
          onPress={onpress}>
          <Entypo
            name={fontName}
            size={fontSize}
            color={fontColor}
            style={{...styles.imgStyle, ...fontStyle}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={headerTextViewStyle}
          onPress={headerTextonPress}>
          <Text style={{...styles.headerTextStyle, ...headerTextStyle}}>
            {headerText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
    // <View style={{...styles.headerContainer, ...headerContainerStyles}}>
    //  {!!something}
    //   {/* <Text style={{...styles.headertext, ...HeaderText}}>{title}</Text> */}
    // </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    height: usePercentageHeight(7),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  backbtn: {
    borderWidth: 1,
    width: usePercentageHeight(4),
    height: usePercentageHeight(4),
    marginLeft: usePercentageWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#E8E6EA',
  },
  headerTextStyle: {
    fontSize: 17,
    color: '#E94057',
  },
  imgStyle: {},
});
