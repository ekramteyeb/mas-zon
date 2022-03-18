import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import MostSold from '../components/MostSold'

export default function MostSoldLists() {
  const products = [
    { id: 1, name: 'abce' },
    { id: 2, name: 'abcee' },
    { id: 3, name: 'durew' },
    { id: 4, name: 'abce' }
  ]
  return (
    <View>
      {products?.length !== 0 ? (
        <FlatList
          data={products}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alert(`${item.rating}`)}>
              <View style={[styles.item]}>
                <MostSold item={item.name} />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          /* extraData={selectedId} */
        />
      ) : (
        <Text>noting to display</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})
