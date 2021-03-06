import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../slices/navSlice'

const ButtonToCart = ({ product }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.nav.cart)
  const cartProduct = {
    id: product.id,
    counter: 1,
    product: product
  }
  return (
    <View style={styles.fixToText}>
      <Button
        icon={{
          name: 'shop',
          size: 15,
          color: 'white'
        }}
        onPress={() => {
          //checks if the item is aleardy in the item ? notify : add to cart list
          cart.filter((ca) => ca.id == cartProduct.id).length > 0
            ? alert('This item is aleardy in your cart')
            : dispatch(setCart(cartProduct))
        }}
        title="ADD"
        buttonStyle={styles.button}
      />
    </View>
  )
}

export default ButtonToCart

const styles = StyleSheet.create({ button: { width: 100, marginTop: 18 } })
