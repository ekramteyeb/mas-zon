import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  StatusBar,
  View,
  Button,
  TextInput,
  SafeAreaView
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import tw from 'tailwind-react-native-classnames'
import Login from '../components/Login'

import MenuNavOptions from '../components/menuNavOptions'
import NavBarTop from '../components/NavBarTop'
import Tabs from '../components/Tab'
import { setLoginToken, setToken } from '../slices/navSlice'
import { registerForPushNotificationsAsync } from './HotDrinksScreen'
import MostSoldLists from './MostSoldLists'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.nav)

  console.log(state.loginToken)
  //get user device token
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      dispatch(setToken(token))
    })
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
