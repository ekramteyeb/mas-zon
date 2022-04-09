import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Button, Text, Icon } from 'react-native-elements'
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
  Alert,
  TouchableOpacity
} from 'react-native'

import ButtonToCart from '../components/ButtonToCart'
import GoBackButton from '../components/GoBackButton'
import { CartModalManual } from './CartModalManual'
import { useNavigation } from '@react-navigation/native'
import Tabs from './Tab'
import { setCart, setUpdateCart } from '../slices/navSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartList = ({ products }) => {
  const navigation = useNavigation()
  const cart = useSelector((state) => state.nav.cart)
  const dispatch = useDispatch()

  return (
    <>
      <SafeAreaView style={[styles.container, tw`bg-gray-300`]}>
        <Text style={[styles.header]}>
          Cart : {products?.reduce((a, b) => a + b.counter, 0)} items in your
          cart{' '}
        </Text>
        <Text h4 style={[styles.header]}>
          Total {products?.reduce((a, b) => a + b.counter * b.product.price, 0)}{' '}
          Birr
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
                        uri: `${item?.product.image}`
                      }}
                      resizeMode="cover"
                    />
                  </View>

                  <View style={styles.details}>
                    <Text style={styles.title}>{item.product.name}</Text>
                    <Text style={styles.title}>{item.product?.price} birr</Text>
                    <View
                      style={tw`flex-1 flex-row items-center justify-around`}
                    >
                      <Button
                        title={
                          item.counter > 1 ? (
                            <Icon name="remove" size={20} color={'white'} />
                          ) : (
                            <Icon
                              name="delete"
                              size={20}
                              color={'white'}
                              onPress={() => {
                                Alert.alert(
                                  'You wanna remove item from list : ',
                                  `${item.product.name}`,
                                  [
                                    {
                                      text: 'Cancel',
                                      //onPress: () => Alert.alert('Cancel Pressed'),
                                      style: 'cancel'
                                    },
                                    {
                                      text: 'Ok',
                                      onPress: function () {
                                        let modifiedCart = cart.filter(
                                          (ca) => ca.id !== item.id
                                        )
                                        dispatch(setUpdateCart(modifiedCart))
                                      },
                                      style: 'cancel'
                                    }
                                  ],
                                  {
                                    cancelable: true
                                    /* onDismiss: () =>
                                      Alert.alert(
                                        'This alert was dismissed by tapping outside of the alert dialog.'
                                      ) */
                                  }
                                )
                              }}
                            />
                          )
                        }
                        onPress={() => {
                          if (item.counter <= 1) return
                          let modifiedProduct = {
                            ...item,
                            counter: item.counter - 1
                          }
                          let modifiedCart = cart.map((ca) =>
                            ca.id !== item.id ? ca : modifiedProduct
                          )
                          dispatch(setUpdateCart(modifiedCart))
                        }}
                      ></Button>
                      <Text style={{ margin: 6 }}>{item.counter}</Text>
                      <Button
                        title={<Icon name="add" size={20} color={'white'} />}
                        onPress={() => {
                          let modifiedProduct = {
                            ...item,
                            counter: item.counter + 1
                          }
                          let modifiedCart = cart.map((ca) =>
                            ca.id !== item.id ? ca : modifiedProduct
                          )
                          dispatch(setUpdateCart(modifiedCart))
                        }}
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
          <>
            <Text h4 style={tw`m-2`}>
              Continue shoping{' '}
            </Text>
            <GoBackButton />
          </>
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
    color: 'gray',
    marginBottom: 4,
    marginTop: 4
  },
  header: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',

    padding: 2,
    paddingLeft: 10
  },
  details: {
    flex: 1,
    padding: 0,

    alignItems: 'center'
  },
  productImage: {
    width: 160,
    height: 120,
    borderRadius: 4,
    resizeMode: 'cover'
  },

  productImageContainer: {}
})
