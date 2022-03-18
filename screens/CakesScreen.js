import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CakesScreen = () => {
  const navigation = useNavigation()
  const [products, setProducts] = useState([])
  let [count, setCount] = useState(0)
  //"https://daki-ecommerce.herokuapp.com/api/v1/products"
  //"https://todo-php-api.herokuapp.com/api/v1/products"
  //"https://restcountries.com/v2/all"
  // "https://api.thecatapi.com/v1/breeds?&api_key=d2fa1b3f-bf8a-41be-9ff9-633e9bd15621"

  useEffect(() => {
    axios
      .get('https://daki-ecommerce.herokuapp.com/api/v1/products')
      .then(function (response) {
        setProducts(response.data)
      })
      .catch(function (error) {
        console.log(error)
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
      <Text style={styles.header}> {products.length} Available Products</Text>
      {products?.length !== 0 ? (
        <FlatList
          data={products}
          initialNumToRender={4}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={(item) => navigation.navigate('ProductDetail')}
            >
              <View style={[styles.item, tw`bg-green-500`]}>
                <View style={styles.productImageContainer}>
                  <Image
                    style={[styles.productImage, tw`bg-green-500`]}
                    source={{
                      uri: `${item?.image}`
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.title}> {item.price} bir</Text>
                  <Text>{''}</Text>
                  <Button title="Add"></Button>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          /* extraData={selectedId} */
        />
      ) : (
        <Text>noting to display</Text>
      )}
    </SafeAreaView>
  )
}

export default CakesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f0f8ff'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 14,
    paddingRight: 20,
    marginVertical: 6,
    marginHorizontal: 6,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',

    borderRadius: 6
    /* position: "relative", */
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
    paddingLeft: 15,
    paddingBottom: 15,
    paddingTop: 15
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 6,
    resizeMode: 'center'
  },
  productImageContainer: {}
})
