import { View, Text } from 'react-native'
import React from 'react'
import Routes from './navigations/routes'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from './app/screens/signupScreen'
const Stack=createNativeStackNavigator()
const App = () => {
  return (
    <Routes/>
  )
}

export default App