import { StyleSheet, TextInput, onChangeText, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios'
import { setLoginToken } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

export default function Signup() {
  const [email, onChangeEmail] = React.useState(null)
  const [password, onChangePassword] = React.useState(null)
  const [confirm_password, onChangeConfirmPassword] = React.useState(null)
  const [notify, setNotify] = React.useState(null)
  //const [number, onChangeNumber] = React.useState(null)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const deviceToken = useSelector((state) => state.nav.token)

  const handleSignup = () => {
    if (!email || !password) {
      setNotify('Please enter email/password')
      setTimeout(() => setNotify(null), 3000)
      return
    }
    const data = {
      name: email,
      email: email,
      password: password,
      confirm_password: confirm_password
    }

    axios({
      method: 'POST',
      url: 'https://mass-zone-backend.herokuapp.com/api/register',
      data: data
    })
      .then(function (response) {
        dispatch(setLoginToken(response.data.data.token))
        navigation.navigate('HomeScreen')
      })
      .catch(function (error) {
        setNotify('Please enter proper email ex emaple@gmail.com')
        notify ? setTimeout(() => setNotify(null), 3000) : ''
        console.log('not fetched', error)
      })
  }
  return (
    <View style={tw`h-full bg-green-400 p-10  pt-20`}>
      {notify ? (
        <Text
          style={[styles.login, tw` text-xl font-semibold text-red-500 pl-4 `]}
        >
          {notify}
        </Text>
      ) : (
        <Text></Text>
      )}
      <Text h4>Sign up </Text>

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
      <TextInput
        style={styles.input}
        onChangeText={onChangeConfirmPassword}
        placeholder="Confirm password"
        value={confirm_password}
      />

      {/*  <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter email"
          keyboardType="numeric"
        /> */}
      <Button
        title="Signup "
        icon={{
          name: 'login',
          size: 15,
          color: 'white'
        }}
        buttonStyle={styles.button}
        onPress={() => {
          handleSignup()
          onChangeEmail(null)
          onChangePassword(null)
          onChangeConfirmPassword(null)
        }}
      />
      <View style={tw`pt-2  items-center`}>
        <Text>Already a member ? </Text>
        <Text
          h4
          onPress={() => navigation.navigate('Login')}
          style={{ textDecorationLine: 'underline', color: 'blue' }}
        >
          Login here
        </Text>
      </View>
    </View>
  )
}

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
