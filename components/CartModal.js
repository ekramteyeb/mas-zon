import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'twrnc'

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  Image,
  View
} from 'react-native'
import { Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginToken } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'


const CartModal = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const state = useSelector((state) => state.nav)
 
  const navigation = useNavigation()
  const dispatch = useDispatch()

  /* useEffect(() => {
    state.cart > 0 ? setModalVisible(true) : setModalVisible(false)
  }, [state.cart]) */
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        /* presentationStyle="fullScreen" */
        hardwareAccelerated
        transparent={true}
        visible={modalVisible}
        
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={[tw`bg-white pr-1`, styles.modalView]}>
            <Pressable
              style={[tw`` /* styles.button,   styles.buttonClose*/]}
              //onPress={() => setModalVisible(!modalVisible)}
            >
              {/*  <Icon
                name="close"
                color="purple"
                raised
                style={[tw`bg-blue-300 `]}
                type="ionicon"
              /> */}
              {/* <Text style={styles.textStyle}>Hide Modal</Text> */}

              <View style={[tw`bg-white pr-1`, styles.cartView]}>
                {/* <Image
                  style={[tw`bg-gray-200 rounded-full`, styles.cartViewIcon]}
                  source={{
                    uri: state.products.length > 0 ? state.products[0].image : ''
                    //uri: require('../assets/coffee.png')
                  }}
                  resizeMode="cover"
                />
 */}
                <Pressable
              style={[tw`mt-0` /* styles.button,   styles.buttonClose*/]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon
                name="close"
                color="purple"
                raised
                style={[
                  tw`bg-blue-300 ` /* styles.button, styles.buttonOpen */
                ]}
                type="ionicon"
              />
              {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
            </Pressable>
                <Text > Welcome  </Text>
                <Text>{state?.user?.name}</Text>
                
                <Text onPress={() => {
                    navigation.navigate('OrdersScreen')
                    setModalVisible(!modalVisible)
                    
                  }}
                  style={{ fontSize:24, margin:2 }}
                >
                  Order
                </Text>
                <Button
                  title="view user"
                  onPress={() => {
                    navigation.navigate('UserDetail')
                    setModalVisible(!modalVisible)
                  }}
                ></Button>
              </View>
            </Pressable>
            
          </View>

          
        </View>
        
      </Modal>
      <Pressable
        /*  style={[styles.button, styles.buttonOpen]} */
       
        onPress={() => {
          setModalVisible(!modalVisible)
          
        }}
      >
        <Icon
          name="person"
          color="purple"
          size={32}
          /* raised */
          style={[tw`flex-1 justify-center items-center mr-3` /* styles.button, styles.buttonOpen */]}
          type="ionicon"
        />
        {/* <Text style={styles.textStyle}>'Show Modal'</Text> */}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    
    
  },
  cartViewIcon: { height: '25%', width: '50%', resizeMode: 'stretch' },
  cartView: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent:'flex-start',
  
  },
  modalView: {
    marginTop: 0,
    width: '100%',
    height: '93%',

    /* borderTopRightRadius: 10, */
    /* borderTopLeftRadius: 10, */
    padding: 0,
    /* alignItems: 'center', */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 100,
    padding: 10,
    width: 50,
    height: 50,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 24
  }
})

export default CartModal
