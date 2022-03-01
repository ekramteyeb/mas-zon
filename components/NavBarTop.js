import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function NavBarTop() {
  return (
    <>
      <View style={[styles.container, tw`bg-gray-400 h-20`]}>
        <TouchableOpacity>
          {/*  <Image
            style={[tw`rounded-full`, styles.icon]}
            source={{
              uri: "https://husstey.sirv.com/Images/icon2.jpeg",
              //require("../assets/icon2.webp")
            }}
          /> */}
          <Text>Logo Navigation menu</Text>
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
    marginBottom: 2,
  },
  icon: {
    height: 100,
    width: 100,
  },
});
