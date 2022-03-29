import { StyleSheet, TextInput, onChangeText, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import axios from 'axios'
import { setLoginToken } from '../slices/navSlice'
import { setUser } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const [email, onChangeEmail] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)
  const [notify, setNotify] = React.useState(null)

  //const [number, onChangeNumber] = React.useState(null)
  const dispatch = useDispatch()
  const state = useSelector((state) => state.nav)

  const navigation = useNavigation()

  //after login register device token for notification

  const handleLogin = () => {
    if (!email || !password) {
      setNotify('Please enter email/password')
      notify ? setTimeout(() => setNotify(null), 3000) : ''
      return
    }
    const data = { email: email, password: password }
    axios({
      method: 'POST',
      url: 'https://mass-zone-backend.herokuapp.com/api/login',
      data: data
    })
      .then(function (response) {
        console.log(response.data.data, 'login data')
        dispatch(setUser(response.data.data))
        dispatch(setLoginToken(response.data.data.token))
        navigation.navigate('HomeScreen')
      })

      .catch(function (error) {
        console.log('not fetched login', error)
        setNotify('Incorrect email/password')
        notify ? setTimeout(() => setNotify(null), 3000) : ''
      })
  }

  return (
    <View style={tw`h-full bg-green-400 p-10  pt-40`}>
      {notify ? (
        <Text
          style={[styles.login, tw` text-xl font-semibold text-red-500 pl-4 `]}
        >
          {notify}
        </Text>
      ) : (
        <Text></Text>
      )}

      <Text h4 style={{ paddingLeft: 20 }}>
        Login
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="Enter email"
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        placeholder="Enter password"
        value={password}
      />

      {/*  <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter email"
          keyboardType="numeric"
        /> */}
      <Button
        title="Login "
        icon={{
          name: 'login',
          size: 15,
          color: 'white'
        }}
        buttonStyle={styles.button}
        onPress={() => {
          handleLogin()
          onChangeEmail(null)
          onChangePassword(null)
        }}
      />
      <View style={tw`pt-2  items-center`}>
        <Text>Not a member yet ? </Text>
        <Text
          h4
          onPress={() => navigation.navigate('Signup')}
          style={{ textDecorationLine: 'underline', color: 'blue' }}
        >
          Register
        </Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    height: 46,
    margin: 12,
    borderWidth: 0.2,
    padding: 8,

    backgroundColor: 'white'
  },
  button: {
    width: 100,
    marginLeft: 80,
    marginTop: 10
  }
})
