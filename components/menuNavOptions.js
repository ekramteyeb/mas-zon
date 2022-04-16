import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  Image
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import { setFilter } from '../slices/navSlice'

const data = [
  {
    id: '5678',
    title: 'MainDishes',
    //image: "https://links.papareact.com/28w",
    image: 'https://husstey.sirv.com/Images/mas-zon/maindish.webp',
    sreen: 'MainDishScreen',
    category: ''
  },
  {
    id: '9102',
    title: 'Soup',
    image: 'https://husstey.sirv.com/Images/mas-zon/soup.webp',
    //"https://husstey.sirv.com/Images/VW%20Beetle.jpg",
    sreen: 'SoupScreen',
    category: 'soup'
  },
  {
    id: '9103',
    title: 'Cakes',
    image: 'https://husstey.sirv.com/Images/mas-zon/cakes.webp',
    sreen: 'CakesScreen',
    category: 'cake'
  },
  {
    id: '2323',
    title: 'Salad',
    image: 'https://husstey.sirv.com/Images/mas-zon/salad.webp',
    sreen: 'SaladScreen',
    category: 'salad'
  },
  {
    id: '2424',
    title: 'Hot Drinks',
    image: 'https://husstey.sirv.com/Images/mas-zon/coffee2.jpg',
    sreen: 'HotDrinksScreen',
    category: 'hotdrinks'
  },
  {
    id: '1234',
    title: 'Soft Drinks',
    image: 'https://husstey.sirv.com/Images/mas-zon/softdrinks.webp',
    sreen: 'SoftDrinksScreen',
    category: 'softdrinks'
  }
]
const MenuNavOptions = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <>
      <Text style={tw`text-lg font-bold ml-40`}>Menu</Text>
      <SafeAreaView style={tw`flex`}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          initialNumToRender={2}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                dispatch(setFilter(item.category)),
                  navigation.navigate(item.sreen)
              }}
              style={[
                tw`bg-gray-100  pl-0 m-1 mb-2 `,
                {
                  width: '31%',
                  borderBottomWidth: 6,
                  borderBottomColor: 'gray'
                }
              ]}
            >
              <View
                style={{
                  paddingLeft: 0,
                  borderRadius: 4
                }}
              >
                <Image
                  style={[
                    tw` bg-green-200`,
                    { height: 106, resizeMode: 'cover' }
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
                    { textAlign: 'center' },
                    tw`mt-2  text-lg font-bold bg-gray-300`
                  ]}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </>
  )
}

export default MenuNavOptions
