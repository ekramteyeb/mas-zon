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
import NavBarTop from "../components/NavBarTop";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../slices/navSlice";

const SoupScreen = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.nav.cart);
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      let response = await fetch(
        //"https://daki-ecommerce.herokuapp.com/api/v1/products"
        //"https://restcountries.com/v2/all"
        "https://api.thecatapi.com/v1/breeds?&api_key=d2fa1b3f-bf8a-41be-9ff9-633e9bd15621"
      );
      let json = await response.json();
      setProducts(json);
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
      <NavBarTop />

      {products?.length !== 0 ? (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alert(`${item.rating}`)}>
              <View style={[styles.item, tw`bg-gray-600`]}>
                <View style={styles.productImageContainer}>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: `${item?.image?.url}`,
                    }}
                  />
                </View>
                <View style={tw`pl-8`}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.title}> € {item.adaptability}</Text>
                  <View style={styles.fixToText}>
                    <Button
                      title="add to cart "
                      onPress={() => {
                        dispatch(setCart(cart + 1));
                      }}
                      style={styles.button}
                    ></Button>
                  </View>
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

export default SoupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    /* marginTop: StatusBar.currentHeight || 0, */
    backgroundColor: "#f0f8ff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff",
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  productImage: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  productImageContainer: {
    width: 128,
    paddingLeft: 4,
  },
});
