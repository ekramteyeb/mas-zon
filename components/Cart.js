import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Cart = ({ cart }) => {
  return (
    <View style={tw`border-2 w-10 h-10 rounded-full bg-blue-300`}>
      <Text style={tw`text-red-500 text-lg  font-bold text-center `}>
        {cart}
      </Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
