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

import MenuNavOptions from '../components/menuNavOptions'
import NavBarTop from '../components/NavBarTop'
import Tabs from '../components/Tab'
import { setToken } from '../slices/navSlice'
import { registerForPushNotificationsAsync } from './HotDrinksScreen'
import MostSoldLists from './MostSoldLists'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.nav)
  const [ans, setAns] = useState(false)
  const [text, onChangeText] = React.useState('Useless Text')
  const [number, onChangeNumber] = React.useState(null)

  //get user device token
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      dispatch(setToken(token))
      setAns(false)
    })
  }, [])

  return (
    <SafeAreaView style={[styles.container, tw`bg-white h-full`]}>
      {ans ? (
        <>
          <Button
            title="close"
            onPress={() => {
              setAns(false)
              onChangeText(null)
              onChangeNumber(null)
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
        <>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Enter text"
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter number"
            keyboardType="numeric"
          />
          <Button
            title="Enter "
            onPress={() => {
              setAns(true)
              onChangeText(null)
              onChangeNumber(null)
            }}
          ></Button>
        </>
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
