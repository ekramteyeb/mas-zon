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
import { useNavigation } from '@react-navigation/native'

export default function NavBarTop() {
  const state = useSelector((state) => state.nav)
  const navigation = useNavigation()
  return (
    <>
      {state.loginToken ? (
        <SafeAreaView
          style={[styles.container, tw`bg-white h-16  `]}
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
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text h4 style={tw`text-xl font-bold text-gray-700`}>MASS a ZONE</Text>
          </TouchableOpacity>
         
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
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomColor:'lightgray',
    borderBottomWidth:1,
    borderRadius: 2,
    marginBottom: 0,

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
