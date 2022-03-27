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

import ButtonToCart from '../components/ButtonToCart'
import { useNavigation } from '@react-navigation/native'

const ProductList = ({ products }) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={[styles.container, tw`bg-gray-100`]}>
      <Text style={[styles.header]}>{products?.length} Different Choices</Text>
      {products?.length !== 0 ? (
        <FlatList
          data={products}
          initialNumToRender={4}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductDetail', { product: item })
              }}
            >
              <View style={[styles.item, tw`bg-gray-200`]}>
                <View style={styles.productImageContainer}>
                  <Image
                    style={[styles.productImage, tw`bg-green-500`]}
                    source={{
                      uri: `${item?.image}`
                    }}
                  />
                </View>
                <View style={styles.details}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.title}> {item.price} birr</Text>

                  <ButtonToCart />
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          /* extraData={selectedId} */
        />
      ) : (
        <Text>noting tto display</Text>
      )}
    </SafeAreaView>
  )
}

export default ProductList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    paddingTop: 12,
    backgroundColor: 'red'
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
    color: 'black'
  },
  header: {
    fontSize: 20,
    color: 'black',
    textAlign: 'right',
    paddingRight: 16
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
