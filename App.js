import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MainDishScreen from "./screens/MainDishScreen";
import SaladScreen from "./screens/SaladScreen";
import { store } from "./store";
import SoupScreen from "./screens/SoupScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#61dafb" />
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainDishScreen"
              component={MainDishScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaladScreen"
              component={SaladScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SoupScreen"
              component={SoupScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 10,
    /*  alignItems: "center",
    justifyContent: "center", */
  },
  statusBAr: {
    height: 20,
    backgroundColor: "steelblue",
  },
  body: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#888",
  },
});
