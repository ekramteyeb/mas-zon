import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../slices/navSlice'

const ButtonToCart = ({ product }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.nav.cart)
  return (
    <View style={styles.fixToText}>
      <Button
        icon={{
          name: 'shop',
          size: 15,
          color: 'white'
        }}
        onPress={() => {
          dispatch(setCart(product))
        }}
        title="ADD"
        buttonStyle={styles.button}
      />
    </View>
  )
}

export default ButtonToCart

const styles = StyleSheet.create({ button: { width: 100, marginTop: 18 } })
