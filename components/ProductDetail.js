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
import { Text } from 'react-native-elements'
import GoBackButton from './GoBackButton'

export default function ProductDetail({ navigation, route }) {
  //const navigation = useNavigation()
  const product = route.params.product
  console.log(product)
  return (
    <>
      <SafeAreaView style={[styles.container, tw`bg-gray-200 `]}>
        <TouchableOpacity>
          <Image
            style={[tw`bg-gray-200`, styles.icon]}
            source={{
              uri: product.image
              //require("../assets/icon2.webp")
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={tw`pl-4 pb-10 pt-6`}>
          <Text h3>{product.name}</Text>
          <Text>Price : {product.price} birr</Text>
          <Text>Ingredients: {product.details}</Text>
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

    borderRadius: 6
  },
  icon: {
    height: 400,
    width: '100%'
  }
})
