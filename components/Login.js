import { StyleSheet, Text, TextInput, onChangeText, View } from 'react-native'
import { Button } from 'react-native-elements'
import React from 'react'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios'
import { setLoginToken } from '../slices/navSlice'

const Login = () => {
  const [email, onChangeEmail] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)
  const [notify, setNotify] = React.useState(null)
  //const [number, onChangeNumber] = React.useState(null)
  const dispatch = useDispatch()
  const handleLogin = () => {
    if (!email || !password) {
      setNotify('Please enter email/password')
      setTimeout(() => setNotify(null), 3000)
      return
    }
    const data = { email: email, password: password }
    axios({
      method: 'POST',
      url: 'https://mass-zone-backend.herokuapp.com/api/login',
      data: data
    })
      .then(function (response) {
        dispatch(setLoginToken(response.data.data.token))
      })
      .catch(function (error) {
        console.log('not fetched', error)
      })
  }
  return (
    <View style={tw`h-full bg-green-300 p-10  pt-40`}>
      {notify ? (
        <Text
          style={[styles.login, tw` text-xl font-semibold text-red-500 pl-4 `]}
        >
          {notify}
        </Text>
      ) : (
        <Text></Text>
      )}
      <Text
        style={[styles.login, tw` text-xl font-semibold text-gray-500 pl-4 `]}
      >
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
