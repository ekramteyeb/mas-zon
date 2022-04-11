import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Icons = () => {
  return (
    <View>
      <Text>Icons</Text>
      {/*      <Icon raised name="home" color="#517fa4" onPress={() => alert('homee')} />
       */}
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
    </View>
  )
}

export default Icons

const styles = StyleSheet.create({})
