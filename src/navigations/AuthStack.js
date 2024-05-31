import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../app/screens/signupScreen';
import NumberInput from '../app/screens/numberInput';
import CountryPicker from '../app/components/countryPicker';
import OtpScreen from '../app/screens/OtpScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
   
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="number" component={NumberInput} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="countryPicker" component={CountryPicker} />
      </Stack.Navigator>
   
  );
}
