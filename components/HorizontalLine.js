import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const HorizontalLine = () => {
  return (
    <View style={[tw`bg-gray-400 mt-2 mb-2 w-80`, styles.container]}></View>
  )
}

export default HorizontalLine

const styles = StyleSheet.create({
  container: {
    height: 1
  }
})
