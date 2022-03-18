import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function GoBackButton() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>This is coming soon...</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack()
        }}
      />
    </View>
  )
}
