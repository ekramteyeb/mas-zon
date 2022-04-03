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
import { CartModalManual } from './CartModalManual'
import { useNavigation } from '@react-navigation/native'
import Tabs from './Tab'

const CartList = ({ products }) => {
  const navigation = useNavigation()
  const [counter, setCounter] = useState(1)

  return (
    <>
      <SafeAreaView style={[styles.container, tw`bg-gray-300`]}>
        <Text style={[styles.header]}>
          Cart : {products?.length} items in your cart{' '}
        </Text>
        <Text style={[styles.header]}>
          Total {products.reduce((a, b) => a + b.price, 0)} Birr
        </Text>
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
                    <Text style={styles.title}>{item.price} birr</Text>
                    <View style={tw`flex-row items-center justify-around`}>
                      <Button
                        title="-"
                        onPress={() => setCounter(counter - 1)}
                      ></Button>
                      <Text>{counter}</Text>
                      <Button
                        title="+"
                        onPress={() => setCounter(counter + 1)}
                      ></Button>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            /* extraData={selectedId} */
          />
        ) : (
          <Text>noting to display</Text>
        )}
      </SafeAreaView>
    </>
  )
}

export default CartList

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
    fontSize: 16,
    color: 'black',
    textAlign: 'left',

    padding: 2,
    paddingLeft: 10
  },
  details: {
    padding: 20
  },
  productImage: {
    width: 160,
    height: 120,
    borderRadius: 4,
    resizeMode: 'cover'
  },

  productImageContainer: {}
})
