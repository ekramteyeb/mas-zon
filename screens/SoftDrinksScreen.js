import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { HomeOutlined } from '@ant-design/icons'
import axios from 'axios'
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions
} from 'react-native'
import { Icon, Button } from 'react-native-elements'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../slices/navSlice'
import { sendPushNotification } from './HotDrinksScreen'
import Cart from '../components/Cart'
import ModalComponent from '../components/ModalComponent'

const SoftDrinksScreen = () => {
  const state = useSelector((state) => state.nav)
  const dispatch = useDispatch()
  const [users, setUsers] = useState(null)
  //const tokentoken = '4|3FgxURT6E5PlTX22RuzqjSEFxBvyL2XLOj8oK8ar'
  const fetchUser = () => {
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

        // dispatch(setProducts(response.data.data))
      })
      .catch(function (error) {
        console.log('not fetched ,softdrinks screen')
      })
  }

  return (
    <View style={[styles.container /* tw`bg-white h-full` */]}>
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

      {/* <Button
        title="Add cart"
        style={styles.buttons}
        onPress={() => {
          dispatch(setCart(state.cart + 1)), sendPushNotification(state.token)
        }}
      ></Button> */}
      <Text h4>{users ? `User is ${state.user?.name}` : 'No user here'}</Text>
      <View>
        {users?.map((user, index) => (
          <View
            style={tw`bg-gray-200 p-2 h-14 m-1  items-center justify-between flex-row`}
            key={user.id * 201}
          >
            <Text style={tw`  text-blue-800 text-lg dark:text-white`}>
              {user.name}
            </Text>
            <Button
              title="Send text"
              icon={{ name: 'chat', size: 15, color: 'orange' }}
              onPress={() => sendPushNotification(user.device)}
            />
          </View>
        ))}
      </View>
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
