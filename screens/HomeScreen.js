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
import NavBarTop from "../components/NavBarTop";
import MostSoldLists from "./MostSoldLists";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <NavBarTop />
      <MostSoldLists />
      <View style={{ padding: 0 }}>
        <MenuNavOptions />
      </View>
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
