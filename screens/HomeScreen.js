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
        console.log('feteched again')
        dispatch(setProducts(response.data.data))
      })
      .catch(function (error) {
        console.log('not fetched')
      })
    // setProducts(json.data);
    //setCount(count + 1);
  }, [state.loginToken])
  useEffect(() => {
    console.log('login token', state.loginToken)

    console.log('user', state.user)

    axios({
      method: 'PUT',
      url: `https://mass-zone-backend.herokuapp.com/api/users/${state.user}`,
      data: { device: state.token },
      headers: {
        Authorization: `Bearer ${state.loginToken}`
      }
    })
      .then(function (response) {
        console.log(response.data, 'device token response')
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
          <Button
            title="close"
            onPress={() => {
              dispatch(setLoginToken(null))
            }}
          ></Button>

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
  },
  icon: {
    height: 100,
    width: 100,
    resizeMode: 'stretch'
  }
})
