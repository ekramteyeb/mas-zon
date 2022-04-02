import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import NavBarTop from '../components/NavBarTop'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../slices/navSlice'
import ButtonToCart from '../components/ButtonToCart'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'

const SoupScreen = () => {
  const products = useSelector((state) => state.nav.products)?.filter(
    (p) => p.category == 'soup'
  )

  return (
    <>
      <ProductList products={products} />
      <Cart />
    </>
  )
}

export default SoupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,

    /* marginTop: StatusBar.currentHeight || 0, */
    backgroundColor: '#f0f8ff'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffff'
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover'
  },
  productImageContainer: {
    width: 128,
    paddingLeft: 4
  }
})
