import { useNavigation } from '@react-navigation/native'
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function MostSold({ item }) {
  return (
    <>
      <TouchableOpacity>
        <View style={[styles.container, tw`bg-gray-200 h-28`]}>
          <Image
            style={[tw``, styles.icon]}
            source={{
              uri: item.image
              //uri: 'https://husstey.sirv.com/Images/icon2.jpeg'
              //require("../assets/icon2.webp")
              //Ahmed, reem and afnan are my lovely children.
            }}
          />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    marginLeft: 2,
    marginRight: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
    //backgroundColor: "lightgray",
    borderRadius: 5
  },
  icon: {
    height: 90,
    width: 100
  },
  text: {
    color: 'black',
    fontSize: 18
  }
})
