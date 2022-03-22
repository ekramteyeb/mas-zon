import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { StyleSheet, View, Button, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import tw from 'tailwind-react-native-classnames'
import Login from '../components/Login'

import MenuNavOptions from '../components/menuNavOptions'
import NavBarTop from '../components/NavBarTop'
import Tabs from '../components/Tab'
import { setLoginToken, setToken, setProducts } from '../slices/navSlice'
import { registerForPushNotificationsAsync } from './HotDrinksScreen'
import MostSoldLists from './MostSoldLists'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.nav)
  //const temporaryToken = '1|yukzD74qfMlyirUe133g53H1qf1jooZbaznUqR5A'

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
        console.log(response.data.data)
        dispatch(setProducts(response.data.data))
      })
      .catch(function (error) {
        console.log('not fetched')
      })
    // setProducts(json.data);
    //setCount(count + 1);
  }, [])

  return (
    <SafeAreaView style={[styles.container, tw`bg-white h-full`]}>
      {state.loginToken ? (
        <>
          <Button
            title="close"
            onPress={() => {
              dispatch(setLoginToken(null))
            }}
          ></Button>
          <NavBarTop />
          <Tabs />
          <MostSoldLists />
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
  },
  icon: {
    height: 100,
    width: 100,
    resizeMode: 'stretch'
  }
})
