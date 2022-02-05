import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import tw from "tailwind-react-native-classnames";

import MenuNavOptions from "../components/menuNavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text>Home</Text>
      <TouchableOpacity>
        <Image
          style={[tw`rounded-full bg-green-900`, styles.icon]}
          source={{
            uri: "https://husstey.sirv.com/Images/icon2.jpeg",
            //require("../assets/icon2.webp")
          }}
        />
      </TouchableOpacity>

      <MenuNavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  icon: {
    height: 100,
    width: 100,
    resizeMode: "stretch",
  },
});
