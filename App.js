import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import MainDishScreen from './screens/MainDishScreen'
import SaladScreen from './screens/SaladScreen'
import { store } from './store'
import SoupScreen from './screens/SoupScreen'
import SoftDrinksScreen from './screens/SoftDrinksScreen'
import CakesScreen from './screens/CakesScreen'
import HotDrinksScreen from './screens/HotDrinksScreen'
import ProductDetail from './components/ProductDetail'
import UserDetail from './components/UserDetail'
import CartScreen from './screens/CartScreen'
import CheckoutScreen from './screens/CheckoutScreen'
import Signup from './components/Signup'
import Login from './components/Login'
import NavBarTop from './components/NavBarTop'
import OrdersScreen from './screens/OrdersScreen'

import { useEffect, useState, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { useDispatch } from 'react-redux'
import { setExpoToken } from './slices/navSlice'
//import { router } from 'expo-router';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});



export default function App() {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  //const dispatch = useDispatch()
  
  const Stack = createNativeStackNavigator()

 /*  useEffect(() => {
    registerForPushNotificationsAsync().then(function(token){
      setExpoPushToken(token)
      console.log('expo push token from App.js')
      dispatch(setExpoToken(token))
     

    });

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


 */
  async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      // Learn more about projectId:
      // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
      token = (await Notifications.getExpoPushTokenAsync({ projectId: PROJECT_ID })).data;
      console.log(token, 'expo push  token');
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    return token;
  }
  

  function useNotificationObserver() {
    useEffect(() => {
      let isMounted = true;
  
      function redirect(notification) {
        const url = notification.request.content.data?.url;
        /* if (url) {
          router.push(url);
        } */
        if(url){
          console.log(router, 'router from app.js')
        }else{
          console.log('there is no url in app.js')
        }
      }
  
      Notifications.getLastNotificationResponseAsync()
        .then(response => {
          if (!isMounted || !response?.notification) {
            return;
          }
          redirect(response?.notification);
        });
  
      const subscription = Notifications.addNotificationResponseReceivedListener(response => {
        redirect(response.notification);
      });
  
      return () => {
        isMounted = false;
        subscription.remove();
      };
    }, []);
  }
  //useNotificationObserver()
  

  
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#61dafb" />
      <NavigationContainer>
        <SafeAreaProvider>
          <NavBarTop />
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
            <Stack.Screen
              name="SoftDrinksScreen"
              component={SoftDrinksScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CakesScreen"
              component={CakesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HotDrinksScreen"
              component={HotDrinksScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserDetail"
              component={UserDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartScreen"
              component={CartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckoutScreen"
              component={CheckoutScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="OrdersScreen"
              component={OrdersScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 10
    /*  alignItems: "center",
    justifyContent: "center", */
  },
  statusBAr: {
    height: 20,
    backgroundColor: 'steelblue'
  },
  body: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#888'
  }
})
