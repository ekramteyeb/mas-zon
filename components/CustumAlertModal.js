import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import tw from 'twrnc'

export default function CustomAlertModal({ isVisible, message, onClose }){
  
    return (
    <Modal isVisible={isVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text style={tw`text-gray-600 text-lg`}>{message}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={[tw`text-xl`,{ marginTop: 10, color: 'blue' }]}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};


