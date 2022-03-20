import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const CakesScreen = () => {
  const navigation = useNavigation()
  const [products, setProducts] = useState([])
  let [count, setCount] = useState(0)
  const token = useSelector((state) => state.nav.loginToken)
  //"https://daki-ecommerce.herokuapp.com/api/v1/products"
  //"https://todo-php-api.herokuapp.com/api/v1/products"
  //"https://restcountries.com/v2/all"
  // "https://api.thecatapi.com/v1/breeds?&api_key=d2fa1b3f-bf8a-41be-9ff9-633e9bd15621"

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://mass-zone-backend.herokuapp.com/api/products',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(function (response) {
        console.log(response.data)
        setProducts(response.data.data)
      })
      .catch(function (error) {
        console.log('not fetched')
      })
    // setProducts(json.data);
    //setCount(count + 1);
  }, [])
  /* const getArticlesFromApi = async () => {
    let response = await fetch(
      "https://daki-ecommerce.herokuapp.com/api/v1/products"
    );
    let json = await response.json();
    set;

    //return json;
  }; */

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, tw`bg-gray-200`]}>
        {products.length} different choices
      </Text>
      {products?.length !== 0 ? (
        <FlatList
          data={products}
          initialNumToRender={4}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={(item) => navigation.navigate('ProductDetail')}
            >
              <View style={[styles.item, tw`bg-gray-500`]}>
                <View style={styles.productImageContainer}>
                  <Image
                    style={[styles.productImage, tw`bg-green-500`]}
                    source={{
                      uri: `${item?.image}`
                    }}
                  />
                </View>
                <View style={styles.details}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.title}> {item.price} bir</Text>
                  <Text>{''}</Text>
                  <Button
                    icon={{
                      name: 'shop',
                      size: 15,
                      color: 'white'
                    }}
                    title="ADD"
                    buttonStyle={styles.button}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          /* extraData={selectedId} */
        />
      ) : (
        <Text>noting tto display</Text>
      )}
    </SafeAreaView>
  )
}

export default CakesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
    //backgroundColor: '#f0f8ff'
  },
  item: {
    padding: 8,
    paddingRight: 0,
    marginVertical: 6,
    marginHorizontal: 6,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',

    borderRadius: 6
    /* position: "relative", */
  },
  title: {
    fontSize: 20,

    color: 'orange'
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center'
  },
  details: {
    padding: 20
  },
  productImage: {
    width: 190,
    height: 140,
    borderRadius: 6,
    resizeMode: 'cover'
  },
  button: { width: 100 },
  productImageContainer: {}
})
