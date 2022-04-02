import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-elements'
import tw from 'twrnc'
import { useSelector } from 'react-redux'

const Cart = () => {
  const state = useSelector((state) => state.nav)
  return (
    <View
      style={[
        tw`  mt-0 bg-red-600 p-2`,
        {
          display: state.cart > 0 ? 'flex' : 'none',
          height: '14%',
          borderRadius: 2
        }
      ]}
    >
      <View style={[tw`bg-gray-200 p-2`, styles.container]}>
        <Image
          style={[tw`bg-gray-200`, styles.cartViewIcon]}
          source={{
            uri: state.products
              ? state.cart < state.products.length
                ? state.products[state.cart].image
                : state.products[0].image
              : 'kk'
            //uri: require('../assets/coffee.png')
          }}
        />
        <View>
          <Text>{state.cart} items </Text>
          <Text h4>
            {state.products ? state.products[0].price * state.cart : 0} birr{' '}
          </Text>
          <Text>inclusive of tax </Text>
        </View>
        <Button
          title="CHECKOUT"
          onPress={() => alert('cart page is coming')}
        ></Button>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cartViewIcon: { height: '90%', width: '30%', resizeMode: 'contain' }
})
