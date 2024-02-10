import { useNavigation } from '@react-navigation/native'
import {
  Button,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import { Text } from 'react-native-elements'
import GoBackButton from './GoBackButton'
import HorizontalLine from './HorizontalLine'

export default function UserDetail({ navigation, route }) {
  //const navigation = useNavigation()
  

  const user = useSelector(state => state.nav)

  console.log(user, 'from user detail')

  return (
    <>
      <SafeAreaView style={[styles.container, tw`bg-gray-200 h-auto`]}>
        <TouchableOpacity>
          <Image
            style={[tw`bg-gray-200 p-16`, styles.icon]}
            source={{
              uri: user?.image
              //require("../assets/icon2.webp")
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={tw`pl-4 pb-6 pt-6`}>
          <Text h3>{user?.name}</Text>
          <HorizontalLine />
          <Text style={tw`text-red-600 text-6 mb-2`}>Email : {user?.email}</Text>
          <Text>Role : user</Text>
          <Text>Status : inactive</Text>
        </View>
        <GoBackButton />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '99%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    height: 'auto',

    borderRadius: 6
  },
  icon: {
    height: 400,
    width: '100%'
  }
})
