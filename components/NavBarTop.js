import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function NavBarTop() {
  return (
    <>
      <View style={[styles.container, tw`bg-gray-200 h-60`]}>
        <TouchableOpacity>
          <Image
            style={[tw`rounded-full`, styles.icon]}
            source={{
              uri: "https://husstey.sirv.com/Images/icon2.jpeg",
              //require("../assets/icon2.webp")
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 20,
    //backgroundColor: "lightgray",
    borderRadius: 8,
  },
  icon: {
    height: 100,
    width: 100,
  },
});
