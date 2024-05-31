import { View, Text } from 'react-native'
import React from 'react'

const Space = ({width,height,style,children}) => {
  return (
    <View style={[{ width, height }, style]}>
      {children}
    </View>
  )
}

export default Space