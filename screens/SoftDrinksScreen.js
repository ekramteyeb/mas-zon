import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { HomeOutlined } from '@ant-design/icons'
import axios from 'axios'
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  SectionList,
  StyleSheet,
  TextInput,
  Button,
  Dimensions
} from 'react-native'
import { Icon, Text } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../slices/navSlice'
import { sendPushNotification } from './HotDrinksScreen'
import Cart from '../components/Cart'

const SoftDrinksScreen = () => {
  const state = useSelector((state) => state.nav)
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const tokentoken = '4|3FgxURT6E5PlTX22RuzqjSEFxBvyL2XLOj8oK8ar'
  const fetchUser = () => {
    axios({
      method: 'GET',
      //url: 'http://127.0.0.1:8000/api/user',
      url: 'https://mass-zone-backend.herokuapp.com/api/user',
      headers: {
        Authorization: `Bearer ${state.loginToken}`
      }
    })
      .then(function (response) {
        setUser(response.data.name)
        console.log('User feteched', response.data)
        // dispatch(setProducts(response.data.data))
      })
      .catch(function (error) {
        console.log('not fetched ,from local mysql server')
      })
  }

  return (
    <View style={[styles.container /* tw`bg-white h-full` */]}>
      <Cart cart={state.cart} />
      <Icon raised name="home" color="#517fa4" onPress={() => alert('homee')} />
      <Icon
        raised
        name="logo-youtube"
        type="ionicon"
        color="red"
        onPress={() => alert('homegot me ')}
      />
      <Icon
        raised
        name="add-sharp"
        type="ionicon"
        color="blue"
        onPress={() => alert('home')}
      />

      <Button
        title="Add cart"
        style={styles.buttons}
        onPress={() => {
          dispatch(setCart(state.cart + 1)), sendPushNotification(state.token)
        }}
      ></Button>
      <Text h4>{user ? `User is ${user}` : 'No user here'}</Text>

      <Button title="Bring user" onPress={() => fetchUser()}></Button>
    </View>
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

export default SoftDrinksScreen
