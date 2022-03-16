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
      <TouchableOpacity>
        <View style={[styles.container, tw`bg-blue-300 h-36`]}>
          <Image
            style={[tw`rounded-full`, styles.icon]}
            source={{
              uri: "https://husstey.sirv.com/Images/icon2.jpeg",
              //require("../assets/icon2.webp")
            }}
          />
          <Text style={styles.text}>{item}</Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    marginLeft: 2,
    marginRight: "auto",
    paddingLeft: 10,
    paddingRight: 10,
    //backgroundColor: "lightgray",
    borderRadius: 5,
  },
  icon: {
    height: 100,
    width: 100,
  },
  text: {
    color: "red",
    fontSize: 24,
  },
});
