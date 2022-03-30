import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import Cart from './Cart'
import ModalComponent from './ModalComponent'

export default function NavBarTop() {
  const state = useSelector((state) => state.nav)
  return (
    <>
      {state.loginToken ? (
        <SafeAreaView
          style={[styles.container, tw`bg-gray-100 h-16 border-gray-200`]}
        >
          <TouchableOpacity>
            <ModalComponent />
            {/* <Icon
              name="list"
              color="purple"
              raised
              style={tw`bg-blue-300`}
              type="ionicon"
            /> */}
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold text-gray-600`}>Mass Zone</Text>
          <Cart cart={state.cart} />
        </SafeAreaView>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '99%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: 2,
    marginTop: StatusBar.currentHeight || 40,
    // marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    height: 100,
    width: 100
  }
})
