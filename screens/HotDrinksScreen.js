import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { HomeOutlined } from '@ant-design/icons'
import axios from 'axios'

import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Dimensions
} from 'react-native'
import { Icon, Button } from 'react-native-elements'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../slices/navSlice'

import CartModalManual from '../components/CartModalManual'
import ProductList from '../components/ProductList'
import GoBackButton from '../components/GoBackButton'

import ComposeMessages from '../screens/ComposeMessage'


const HotDrinksScreen = () => {
  const [users, setUsers] = useState(null)

  const state = useSelector((state) => state.nav)
  
  const products = state.products?.filter(
    (p) => p.category == 'softdrinks'
  )

  const fetchUsers = () => {
    axios({
      method: 'GET',
      //url: 'http://127.0.0.1:8000/api/user',
      url: 'https://mass-zone-backend.herokuapp.com/api/users',
      headers: {
        Authorization: `Bearer ${state.loginToken}`
      }
    })
      .then(function (response) {
        setUsers(response.data.data)
        console.log(response.data.data, 'users fetched in hotdrink screen')
        // dispatch(setProducts(response.data.data))
      })
      .catch(function (error) {
        console.log('not fetched users ,softdrinks screen')
      })
  }
  useEffect(() => {
      fetchUsers()
  },[])

  return (
    <>
      <ProductList products={products} />
      <ComposeMessages />
      <CartModalManual name=" VIEW CART" navigate="CartScreen" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight,
    //marginHorizontal: 6,
    backgroundColor: '#fff'
    /* alignItems: "center",
    justifyContent: "space-around", */
  },
  buttons: {
    width: 10,
    padding: 10,
    backgroundColor: 'red'
  }
})

export default HotDrinksScreen
