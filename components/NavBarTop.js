import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { Text } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import CartModalManual from './CartModalManual'
import CartModal from './CartModal'
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
          <Text h4 style={tw`text-xl font-bold text-gray-700`}>MASS ZONE</Text>
          <TouchableOpacity>
            <CartModal />
          </TouchableOpacity>

          {/* <Cart cart={state.cart} /> */}
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

    marginTop: Platform.OS === 'ios' ? 38 : 0,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    height: 100,
    width: 100
  }
})
