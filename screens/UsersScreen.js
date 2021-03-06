import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
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
import { sendPushNotification } from './HotDrinksScreen'
import CartModalManual from '../components/CartModalManual'
import ModalComponent from '../components/ModalComponent'
import GoBackButton from '../components/GoBackButton'

const UsersScreen = () => {
  const state = useSelector((state) => state.nav)
  const dispatch = useDispatch()
  const [users, setUsers] = useState(null)
  const navigation = useNavigation()
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
    <SafeAreaView style={[styles.container, tw`bg-white h-full`]}>
      <Text h4>{users ? `User is ${state.user?.name}` : 'No user here'}</Text>
      <View>
        {users?.length > 0 ? (
          <FlatList
            data={users}
            initialNumToRender={4}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserDetail', { user: item })
                }}
              >
                <View
                  style={tw`bg-gray-200 p-2 h-14 m-1  items-center justify-between flex-row`}
                  key={item.id * 201}
                >
                  <Text style={tw`  text-blue-800 text-lg dark:text-white`}>
                    {item.name}
                  </Text>
                  <Button
                    title="Send text"
                    icon={{ name: 'chat', size: 15, color: 'orange' }}
                    onPress={() => sendPushNotification(item.device)}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text></Text>
        )}
      </View>
      {!users ? (
        <Button title="Bring users" onPress={() => fetchUser()}></Button>
      ) : (
        <GoBackButton />
      )}
    </SafeAreaView>
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

export default UsersScreen
