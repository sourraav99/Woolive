import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import authStack from './AuthStack';
import mainStack from './mainStack';
import AuthStack from './AuthStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>{AuthStack()}</NavigationContainer>
    </SafeAreaProvider>
  );
}
