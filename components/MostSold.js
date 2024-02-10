import { useNavigation } from '@react-navigation/native'
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import tw from 'twrnc'
export default function MostSold({ item }) {
  return (
    <>
      <TouchableOpacity>
        <View style={[styles.container, tw`bg-yellow-300 h-30`]}>
          <Image
            style={[tw`bg-yellow-300`, styles.icon]}
            source={{
              uri: item?.image
              //uri: 'https://husstey.sirv.com/Images/icon2.jpeg'
              //require("../assets/icon2.webp")
              //Ahmed, reem and afnan are my lovely children.
            }}
            resizeMode= {item?.category == 'softdrinks' ? 'contain' : 'cover'}
          />
          <Text style={styles.text}>{item?.name}</Text>
          <Text style={styles.text}>{item?.price}</Text>
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
    width: 'auto',
    margin: 4,
    marginTop: 4,
    marginBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    //backgroundColor: "lightgray",
    borderRadius: 5
  },
  icon: {
    height: 106,
    width: 130, 
    borderRadius:2
  },
  text: {
    color: 'black',
    fontSize: 18, 
    fontWeight:'bold'
  }
})
