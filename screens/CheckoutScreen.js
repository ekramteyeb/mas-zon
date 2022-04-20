import { StyleSheet, View, FlatList } from 'react-native'
import {Text} from 'react-native-elements'
import React from 'react'
import {useSelector} from 'react-redux'

const CheckoutScreen = () => {
  const cart = useSelector(state => state.nav.cart)
  return (
    <View>
      <Text h4>Checkout Screen</Text>
      <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          initialNumToRender={2}
          numColumns={3}
          renderItem={({ item }) => ( <Text>{item.name}</Text>)}
      />
    </View>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({})
