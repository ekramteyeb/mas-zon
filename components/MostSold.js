import { useNavigation } from "@react-navigation/native";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";

export default function MostSold({ item }) {
  return (
    <>
      <View style={[styles.container, tw`bg-red-400 h-32`]}>
        <TouchableOpacity>
          <Image
            style={[tw`rounded-full`, styles.icon]}
            source={{
              uri: "https://husstey.sirv.com/Images/icon2.jpeg",
              //require("../assets/icon2.webp")
            }}
          />
        </TouchableOpacity>

        <Text>{item}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: 10,
    marginRight: "auto",
    padding: 20,
    //backgroundColor: "lightgray",
    borderRadius: 6,
  },
  icon: {
    height: 100,
    width: 100,
  },
});
