import {useEffect} from 'react';
import {Dimensions, PixelRatio} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const fontScale = PixelRatio.getFontScale();

export const useFontScale = size => size / fontScale;

export const usePercentageHeight = percentage => {
  return (percentage / 100) * screenHeight;
};

export const usePercentageWidth = percentage => {
  return (percentage / 100) * screenWidth;
};
