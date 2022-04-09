import React, { useEffect, useState } from 'react'
import tw from 'twrnc'

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
import ProductList from '../components/ProductList'
import CartModalManual from '../components/CartModalManual'

const CakesScreen = () => {
  let products = useSelector((state) => state.nav.products)?.filter(
    (p) => p.category == 'cake'
  )

  return (
    <>
      <ProductList products={products} />
      <CartModalManual name=" VIEW CART" navigate={'CartScreen'} />
    </>
  )
}

export default CakesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f0f8ff'
  },
  item: {
    padding: 8,
    paddingRight: 0,
    marginVertical: 6,
    marginHorizontal: 6,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',

    borderRadius: 6
    /* position: "relative", */
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange'
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center'
  },
  details: {
    padding: 20
  },
  productImage: {
    width: 190,
    height: 160,
    borderRadius: 4,
    resizeMode: 'cover'
  },

  productImageContainer: {}
})
