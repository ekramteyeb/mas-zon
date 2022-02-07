import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, TouchableOpacity, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "5678",
    title: "MainDishes",
    //image: "https://links.papareact.com/28w",
    image: "https://husstey.sirv.com/Images/mas-zon/maindish.webp",
    sreen: "MainDishScreen",
  },
  {
    id: "9102",
    title: "Soup",
    image: "https://husstey.sirv.com/Images/mas-zon/soup.webp",
    //"https://husstey.sirv.com/Images/VW%20Beetle.jpg",
    sreen: "SoupScreen",
  },
  {
    id: "9103",
    title: "Cakes",
    image: "https://husstey.sirv.com/Images/mas-zon/cakes.webp",
    sreen: "CountriesScreen",
  },
  {
    id: "2323",
    title: "Salads",
    image: "https://husstey.sirv.com/Images/mas-zon/salad.webp",
    sreen: "SaladScreen",
  },
  {
    id: "2424",
    title: "Hot Drinks",
    image: "https://husstey.sirv.com/Images/mas-zon/coffee2.jpg",
    sreen: "CountriesScreen",
  },
  {
    id: "1234",
    title: "Soft Drinks",
    image: "https://husstey.sirv.com/Images/mas-zon/softdrinks.webp",
    sreen: "MapScreen",
  },
];
const MenuNavOptions = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={tw`text-lg font-bold ml-40`}>Menu</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.sreen)}
            style={[
              tw`bg-gray-100  pl-0 m-1 mb-2 `,
              {
                width: "31%",
                borderBottomWidth: 4,
                borderBottomColor: "red",
              },
            ]}
          >
            <View
              style={{
                paddingLeft: 0,
                borderRadius: 4,
              }}
            >
              <Image
                style={[
                  tw` bg-green-900`,
                  { width: 106, height: 106, resizeMode: "cover" },
                ]}
                source={{ uri: item.image }}
              />
              {/* <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4 ml-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            /> */}
              <Text
                style={[
                  { textAlign: "center" },
                  tw`mt-2  text-lg font-semibold`,
                ]}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default MenuNavOptions;
