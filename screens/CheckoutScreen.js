import { StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native'
import {Text} from 'react-native-elements'
import React from 'react'
import {useSelector} from 'react-redux'
import tw from 'twrnc'


const CheckoutScreen = () => {
  const cart = useSelector(state => state.nav.cart)
  return (
    <View>
      <Text h4 style={tw`text-center text-purple-800`}>Checkout Screen</Text>
      <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          initialNumToRender={2}
          /* numColumns={2} */
          renderItem={({ item }) => (
          <TouchableOpacity style={tw`p-1 m-2`}>
            
            <Text style={tw`p-1 m-2 text-xl  text-cyan-600`}>{item.product.name}</Text>
            <Image
                  style={[
                    tw` bg-white`,
                    { height: 106, width: '45%',resizeMode: 'cover' }
                  ]}
                  source={{ uri: item.product.image }}
                />
          </TouchableOpacity>)}
      />
    </View>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({})
