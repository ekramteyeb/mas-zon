import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity,  Image, Alert } from 'react-native'
import { Text ,Button} from 'react-native-elements'
import { Divider} from 'react-native-paper'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import tw from 'twrnc'
import { setOrders,setUpdateCart } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'


const CheckoutScreen = () => {
  const state = useSelector(state => state.nav)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  
  const handleCheckout = () => {
    dispatch(setOrders(...state.cart))
    dispatch(setUpdateCart([]))
    navigation.navigate("OrdersScreen")
  }
  
  return (
    <SafeAreaView style={tw`pb-0 h-full`}>
      <Text h3 style={tw`text-center hover:text-base text-4xl text-purple-500 bg-gray-900`}>Your items list</Text>
      <Text h4 style={tw`pl-2`}>Hello , {state.user.name} !</Text>
      <FlatList
          data={state.cart}
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
                
                <Divider style={[tw`bg-purple-300 mt-4`,{ width:'80%' ,height:2 }]} />
                <Text  style={tw`text-red-600`}>{item.product.price} BIRR </Text>
          </TouchableOpacity>)}
         
      />
      <Button title='Send Order' onPress={handleCheckout}/>
      <Divider style={[tw`bg-purple-300 mt-4`,{ width:'98%' ,height:2 }]} />
      
    </SafeAreaView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
  
})

