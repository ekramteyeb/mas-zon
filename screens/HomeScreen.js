import React, { useEffect } from 'react'
import { StyleSheet, StatusBar, View, Image, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import tw from 'tailwind-react-native-classnames'

import MenuNavOptions from '../components/menuNavOptions'
import NavBarTop from '../components/NavBarTop'
import { setToken } from '../slices/navSlice'
import { registerForPushNotificationsAsync } from './HotDrinksScreen'
import MostSoldLists from './MostSoldLists'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.nav)

  //get user device token
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      dispatch(setToken(token))
    })
  }, [])

  return (
    <SafeAreaView style={[styles.container, tw`bg-white h-full`]}>
      <NavBarTop />
      <MostSoldLists />

      <View style={{ padding: 0 }}>
        <MenuNavOptions />
      </View>
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
