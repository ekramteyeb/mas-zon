import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Button, Text } from 'react-native-elements'
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { useSelector } from 'react-redux'
import HorizontalLine from '../components/HorizontalLine'
import GoBackButton from '../components/GoBackButton'

const CartScreen = () => {
  //const navigation = useNavigation()
  const products = useSelector((state) => state.nav.products)
  const product = products ? products[10] : []
  //const product = route.params.product
  //console.log(product)
  return (
    <>
      <SafeAreaView style={[styles.container, tw`bg-gray-200 `]}>
        <TouchableOpacity>
          <Image
            style={[tw`bg-gray-200 p-20`, styles.icon]}
            source={{
              uri: product.image
              //require("../assets/icon2.webp")
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={tw`pl-4 pb-10 pt-10`}>
          <Text h3>{product.name}</Text>
          <HorizontalLine />
          <Text style={tw`text-red-600 text-6 mb-2`}>
            Price : {product.price} birr
          </Text>

          <Text>Ingredients: {product.details}</Text>
        </View>
        <GoBackButton />
      </SafeAreaView>
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '99%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,

    borderRadius: 6
  },
  icon: {
    height: 400,
    width: '100%'
  }
})
