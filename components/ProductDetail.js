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

export default function ProductDetail({ item }) {
  const navigation = useNavigation();
  return (
    <>
      <View style={[styles.container, tw`bg-gray-400 h-60`]}>
        <TouchableOpacity>
          <Image
            style={[tw`rounded-full`, styles.icon]}
            source={{
              uri: "https://husstey.sirv.com/Images/icon2.jpeg",
              //require("../assets/icon2.webp")
            }}
          />
        </TouchableOpacity>
        {console.log(item)}
        <Text>This is detail page coming soon ......</Text>
        <Text>{""}</Text>
        <Button
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "99%",
    marginLeft: "auto",
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
