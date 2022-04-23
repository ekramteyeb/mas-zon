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
import HorizontalLine from './HorizontalLine'

export default function ProductDetail({ navigation, route }) {
  //const navigation = useNavigation()
  const product = route.params.product
  console.log(product, 'from product detail')

  return (
    <>
      <SafeAreaView style={[styles.container, tw`bg-gray-200 `]}>
        <TouchableOpacity style={tw`p-1`}>
          <Image
            style={[tw`bg-gray-200 rounded`, styles.icon]}
            source={{
              uri: product.image
              //require("../assets/icon2.webp")
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={tw`pl-4 pb-10 pt-10`}>
          <Text h3>{product.name}</Text>
          <HorizontalLine />
          <Text style={tw`text-red-600 text-6 mb-2`}>
            Price : {product.price} birr
          </Text>
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
