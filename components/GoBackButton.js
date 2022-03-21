import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function GoBackButton() {
  const navigation = useNavigation()
  return (
    <View>
      <Button
        title="Back"
        icon={{
          name: 'chevron-back-circle-outline',
          type: 'ionicon',
          size: 29,
          color: 'white'
        }}
        onPress={() => {
          navigation.goBack()
        }}
      />
    </View>
  )
}
