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
import ProductList from '../components/ProductList'

const CartScreen = () => {
  //const navigation = useNavigation()
  const products = useSelector((state) => state.nav.cart)

  return (
    <>
      <ProductList products={products} />
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
    height: 100,
    width: '50%',
    resizeMode: 'contain'
  }
})
