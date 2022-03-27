import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Cart = ({ cart }) => {
  return (
    <View style={tw` w-12 h-12 p-2 mr-4 rounded-full bg-blue-300`}>
      <Text style={tw`text-red-500 text-lg  font-bold text-center `}>
        {cart}
      </Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})
