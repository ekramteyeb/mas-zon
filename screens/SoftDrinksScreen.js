import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { HomeOutlined } from '@ant-design/icons'
import axios from 'axios'
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Dimensions
} from 'react-native'
import { Icon, Button } from 'react-native-elements'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../slices/navSlice'
import { sendPushNotification } from './HotDrinksScreen'
import CartModalManual from '../components/CartModalManual'
import ProductList from '../components/ProductList'
import GoBackButton from '../components/GoBackButton'

const SoftDrinksScreen = () => {
  const products = useSelector((state) => state.nav.products).filter(
    (p) => p.category == 'softdrinks'
  )

  return (
    <>
      <ProductList products={products} />
      <CartModalManual name=" VIEW CART" navigate="CartScreen" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight,
    //marginHorizontal: 6,
    backgroundColor: '#fff'
    /* alignItems: "center",
    justifyContent: "space-around", */
  },
  buttons: {
    width: 10,
    padding: 10,
    backgroundColor: 'red'
  }
})

export default SoftDrinksScreen
