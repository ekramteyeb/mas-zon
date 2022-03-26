import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import Cart from './Cart'

export default function NavBarTop() {
  const state = useSelector((state) => state.nav)
  return (
    <>
      {state.loginToken ? (
        <View style={[styles.container, tw`bg-gray-100 h-16 border-gray-200`]}>
          <TouchableOpacity>
            <Icon
              name="list"
              color="purple"
              raised
              style={tw`bg-blue-300`}
              type="ionicon"
            />

            {/*  <Image
            style={[tw`rounded-full`, styles.icon]}
            source={{
              uri: "https://husstey.sirv.com/Images/icon2.jpeg",
              //require("../assets/icon2.webp")
            }}
          /> */}
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold text-gray-600`}>Mass Zone</Text>
          <Cart cart={state.cart} />
        </View>
      ) : (
        <Text></Text>
      )}
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
    marginTop: 2,
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
