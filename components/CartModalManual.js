import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Button, Text, Icon } from 'react-native-elements'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const CartModalManual = ({ name }) => {
  const state = useSelector((state) => state.nav)
  const navigation = useNavigation()
  return (
    <View
      style={[
        tw`  mb-0 bg-gray-300 p-1 pt-2 `,
        {
          display: state.cart.length > 0 ? 'flex' : 'none',
          height: '15%',
          borderRadius: 2
        }
      ]}
    >
      <View style={[tw`bg-red-400 p-1 pr-2`, styles.container]}>
        <Image
          style={[tw`bg-gray-200`, styles.cartViewIcon]}
          source={{
            uri:
              state.cart.length > 0
                ? state.cart[state.cart.length - 1].image
                : 'kk'
            //uri: require('../assets/coffee.png')
          }}
        />
        <View>
          <Text style={tw`text-white`}>{state.cart.length} items </Text>
          <Text h4 style={tw`text-white`}>
            {state.cart.length > 0
              ? state.cart.reduce((a, b) => a + b.price, 0)
              : 0}{' '}
            BIRR{' '}
          </Text>
          <Text style={tw`text-white`}>inclusive of tax </Text>
        </View>
        <Button
          icon={<Icon name="shop" size={19} color="blue" />}
          title={name}
          containerStyle={{ backgroundColor: 'white' }}
          type="outline"
          onPress={() =>
            navigation.navigate('CartScreen' /* { product: item } */)
          }
        ></Button>
      </View>
    </View>
  )
}

export default CartModalManual

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cartViewIcon: {
    height: '80%',
    width: '20%',
    borderRadius: 8,
    resizeMode: 'cover'
  }
})
