import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

export default function NavBarTop() {
  return (
    <>
      <View style={[styles.container, tw`bg-gray-100 h-16 border-gray-200`]}>
        <TouchableOpacity>
          <Icon
            name="list-sharp"
            color="black"
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: 2,
    marginTop: 2,
  },
  icon: {
    height: 100,
    width: 100,
  },
});
