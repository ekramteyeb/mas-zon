import { useNavigation } from "@react-navigation/native";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  StatusBar,
  SectionList,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../slices/navSlice";
import { sendPushNotification } from "./HotDrinksScreen";

const SoftDrinksScreen = () => {
  const state = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  console.log(state, "the state is ");

  return (
    <View style={[styles.container /* tw`bg-white h-full` */]}>
      <View style={tw`border-2 w-10 h-10 rounded-full m-0 pt-1 `}>
        <Text style={tw`text-red-500 text-xl font-bold text-center `}>
          {state.cart}
        </Text>
      </View>
      <Icon raised name="home" color="#517fa4" onPress={() => alert("homee")} />
      <Icon
        raised
        name="logo-youtube"
        type="ionicon"
        color="red"
        onPress={() => alert("homee got me ")}
      />
      <Icon
        raised
        name="add-sharp"
        type="ionicon"
        color="blue"
        onPress={() => alert("homee")}
      />

      <Button
        title="Add cart"
        style={styles.buttons}
        onPress={() => {
          dispatch(setCart(state.cart + 1)), sendPushNotification(state.token);
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight,
    //marginHorizontal: 6,
    backgroundColor: "#fff",
    /* alignItems: "center",
    justifyContent: "space-around", */
  },
  buttons: {
    width: 10,
    padding: 10,
    backgroundColor: "red",
  },
});

export default SoftDrinksScreen;
