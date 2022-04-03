import React, { useEffect, useState, memo } from 'react'
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
import { useSelector } from 'react-redux'
import ProductList from '../components/ProductList'
import CartModalManual from '../components/CartModalManual'

const SaladScreen = () => {
  let products = useSelector((state) => state.nav.products)
  let copyProducts = products
    ? [...products].sort((a, b) => a.price - b.price)
    : []

  return (
    <>
      <ProductList products={products} />
      <CartModalManual name="VIEW CART" />
    </>
  )
}

export default SaladScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f0f8ff'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 8,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    position: 'relative'
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'orange',
    paddingLeft: 15,
    paddingBottom: 15,
    paddingTop: 15
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover'
  },
  productImageContainer: {
    width: 128,
    paddingLeft: 0,
    borderWidth: 2,
    borderRightColor: 'green'
  }
})

/* 

 <SafeAreaView style={styles.container}>
      {products?.length !== 0 ? (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alert(`${item.rating}`)}>
              <View style={[styles.item, tw`bg-gray-300`]}>
                <View style={styles.productImageContainer}>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: `${item?.image}`
                    }}
                  />
                </View>
                <Text styles={styles.title}>{item.name}</Text>
                <Text styles={styles.title}> € {item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
           />
      ) : (
        <Text>noting to display</Text>
      )}
    </SafeAreaView>
       
*/
