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
  TouchableOpacity
} from 'react-native'

import ButtonToCart from '../components/ButtonToCart'
import { CartModalManual } from './CartModalManual'
import { useNavigation } from '@react-navigation/native'
import Tabs from './Tab'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../slices/navSlice'

const ProductList = ({ products }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.nav)

  return (
    <>
      <SafeAreaView style={[styles.container, tw`bg-gray-100`]}>
        <View style={tw`flex-row items-center bg-gray-300 pb-1`}>
          <View style={styles.menuTabsView}>
            <Icon
              raised
              name="menuunfold"
              type="antdesign"
              color="red"
              onPress={() => dispatch(setFilter(''))}
            />
            <Text style={tw`text-xs font-bold `}>ALL</Text>
          </View>
          <View style={styles.menuTabsView}>
            <Icon
              raised
              name="cake"
              type="entypo"
              color="red"
              onPress={() => dispatch(setFilter('cake'))}
            />
            <Text style={tw`text-xs font-bold`}>CAKES</Text>
          </View>
          <View style={styles.menuTabsView}>
            <Icon
              raised
              name="drink"
              type="entypo"
              color="green"
              onPress={() => dispatch(setFilter('softdrinks'))}
            />
            <Text style={[{ fontSize: 10 }, tw` font-bold`]}>SOFTDRINK</Text>
          </View>
          <View style={styles.menuTabsView}>
            <Icon
              raised
              name="cafe"
              type="ionicon"
              color="purple"
              onPress={() => dispatch(setFilter('hotdrinks'))}
            />
            <Text style={tw`text-xs font-bold`}>HOTDRINK</Text>
          </View>
          <View style={styles.menuTabsView}>
            <Icon
              raised
              name="bowl"
              type="entypo"
              color="orange"
              onPress={() => dispatch(setFilter('soup'))}
            />
            <Text style={tw`text-xs font-bold`}>SOUP</Text>
          </View>
        </View>
        {/*  <Text h3 style={[styles.header]}></Text> */}
        {state.products?.length !== 0 ? (
          <FlatList
            data={
              state.filter ? state.products.filter((p) => p.category == state.filter) : state.products
            }
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
                    <Text style={styles.title}>
                      {item.price} birr {item.id}
                    </Text>

                    <ButtonToCart product={item} />
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

export default ProductList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    paddingTop: 0
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
    paddingRight: 16,
    padding: 16
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
  menuTabsView: {
    flex: 1,
    alignItems: 'center'
  },

  productImageContainer: {}
})
