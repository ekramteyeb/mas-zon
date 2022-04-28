import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
//import {Text} from 'react-native-elements'
import { Divider, Text } from 'react-native-paper'
import React from 'react'
import {useSelector} from 'react-redux'
import tw from 'twrnc'


const CheckoutScreen = () => {
  const cart = useSelector(state => state.nav.cart)
  
  return (
    <SafeAreaView style={tw`pb-0 h-full`}>
      <Text h4 style={tw`text-center hover:text-base text-4xl text-purple-500 bg-gray-900`}>Your Order</Text>
      <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          initialNumToRender={2}
          numColumns={2}
          
          renderItem={({ item }) => (
          <TouchableOpacity style={tw`flex-1 items-center`}>
            
            <Text style={tw`p-1 m-2 text-xl  text-cyan-600`}>{item.product.name}</Text>
            
            <Image
                  style={[
                    tw` bg-white`,
                    { height: 106,
                      width: '80%',
                      resizeMode: 
                        item.product.category == 'softdrinks' ? 
                          'center' : 'cover' , 
                      borderRadius:6}
                  ]}
                  source={{ uri: item.product.image }}
                />
                <Text>Blue</Text>
                <Divider style={{ backgroundColor: 'red', borderWidth:10 }} />
                <Text>Red</Text>
          </TouchableOpacity>)}
         
      />
       
    </SafeAreaView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({})
