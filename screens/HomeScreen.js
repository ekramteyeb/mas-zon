import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  ScrollView,
  SafeAreaView
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import tw from 'twrnc'
import Login from '../components/Login'

import MenuNavOptions from '../components/menuNavOptions'
import NavBarTop from '../components/NavBarTop'
import Tabs from '../components/Tab'
import ModalComponent from '../components/ModalComponent'
import {
  setLoginToken,
  setToken,
  setProducts,
  setUser
} from '../slices/navSlice'
import { registerForPushNotificationsAsync } from './HotDrinksScreen'
import MostSoldLists from '../components/MostSoldLists'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.nav)
  console.log('cart form home', state.cart)
  //get user device token

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      dispatch(setToken(token))
    })
  }, [])

  // fetch products
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://mass-zone-backend.herokuapp.com/api/products',
      headers: {
        Authorization: `Bearer ${state.loginToken}`
      }
    })
      .then(function (response) {
        dispatch(setProducts(response.data.data))
      })
      .catch(function (error) {
        console.log('not fetched Products from home')
      })
    // setProducts(json.data);
    //setCount(count + 1);
  }, [state.loginToken])

  //Register user device
  useEffect(() => {
    axios({
      method: 'PUT',
      url: `https://mass-zone-backend.herokuapp.com/api/users/${state.user?.id}`,
      data: { device: state.token },
      headers: {
        Authorization: `Bearer ${state.loginToken}`
      }
    })
      .then(function (response) {
        dispatch(setUser(response.data.data))
      })
      .catch(function (error) {
        console.log('device not registerd', error)
        /* setNotify('Incorrect email/password')
        notify ? setTimeout(() => setNotify(null), 3000) : '' */
      })
  }, [state.loginToken])

  return (
    <SafeAreaView style={[styles.container, tw`bg-white h-full`]}>
      {state.loginToken ? (
        <>
          <Tabs />
          <MostSoldLists products={state.products} />
          <View style={{ padding: 0 }}>
            <MenuNavOptions />
          </View>
        </>
      ) : (
        <Login />
      )}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0
    //marginTop: StatusBar.currentHeight || 0
  },
  icon: {
    height: 100,
    width: 100,
    resizeMode: 'stretch'
  }
})
