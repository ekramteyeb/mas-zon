import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../slices/navSlice'
import CustomAlertModal from '../components/CustumAlertModal'

const ButtonToCart = ({ product }) => {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.nav.cart)
  const random = Math.random() * 100
  const cartProduct = {
    id: product.id ,
    counter: 1,
    product: product
  }

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

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
            //? alert('This item is aleardy in your cart. Please press View Cart button to add more of this item. ')
            ?  
              showAlert()
            : dispatch(setCart(cartProduct))
        }}
        title="ADD"
        buttonStyle={styles.button}
      />
      <CustomAlertModal isVisible={isAlertVisible} message={"This item is aleardy in your cart. Please press View Cart button to add more of this item. "} onClose={hideAlert}/>
    </View>
  )
}

export default ButtonToCart

const styles = StyleSheet.create({ button: { width: 100, marginTop: 18 } })
