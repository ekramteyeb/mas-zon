import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const CakesScreen = () => {
  const [products, setProducts] = useState([]);
  let [count, setCount] = useState(0);

  useEffect(async () => {
    try {
      let response = await fetch(
        //"https://daki-ecommerce.herokuapp.com/api/v1/products"
        //"https://restcountries.com/v2/all"
        // "https://api.thecatapi.com/v1/breeds?&api_key=d2fa1b3f-bf8a-41be-9ff9-633e9bd15621"
        "http://localhost:8000/api/v1/products"
      );
      let json = await response.json();
      console.log(json.data);
      setProducts(json.data);
      setCount(count + 1);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alert(`${item.details}`)}>
              <View style={[styles.item, tw`bg-gray-400`]}>
                <View style={styles.productImageContainer}>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: `${item?.image}`,
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.title}> {item.price} bir</Text>
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
  );
};

export default CakesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f0f8ff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 0,
    marginVertical: 6,
    marginHorizontal: 8,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    position: "relative",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Cochin",
    color: "white",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "orange",
    paddingLeft: 15,
    paddingBottom: 15,
    paddingTop: 15,
  },
  productImage: {
    width: 160,
    height: 160,
    borderRadius: 8,
    resizeMode: "cover",
  },
  productImageContainer: {
    paddingLeft: 0,
    padding: 10,

    borderRightColor: "green",
  },
});
