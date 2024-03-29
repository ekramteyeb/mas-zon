import React, { useState } from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'twrnc'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginToken } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const state = useSelector((state) => state.nav)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        /* presentationStyle="fullScreen" */
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.flexEndView}>
          <View style={[tw`bg-green-300`, styles.modalView]}>
            <Text style={styles.modalText}>Hello {state.user?.name} !</Text>
            <Text style={tw`m-2 font-bold text-sm text-slate-500 underline `} onPress={() => alert('admin page')}> Admin page </Text>
            <Button
              title="Sign out"
              icon={{ name: 'logout', color: 'white', size: 18 }}
              onPress={() => {
                dispatch(setLoginToken(null))
                navigation.navigate('Login')
              }}
            ></Button>
            <Pressable
              style={[tw`mt-4` /* styles.button,   styles.buttonClose*/]}
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
          </View>
        </View>
      </Modal>
      <Pressable
        /*  style={[styles.button, styles.buttonOpen]} */
        onPress={() => setModalVisible(true)}
      >
        <Icon
          name="grid"
          color="purple"
          /* raised */
          size={32}
          /* style={[tw`flex-1 justify-center items-center mr-3`  */
          style={[tw`ml-3` /* styles.button, styles.buttonOpen */]}
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
    justifyContent: 'center'
    /* alignItems: 'center' */
  },
  flexEndView: { flex: 1, justifyContent: 'flex-end' },
  modalView: {
    width: '100%',
    height: '60%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 15,
    alignItems: 'center',
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

export default ModalComponent
