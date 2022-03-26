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

export default function MostSoldLists({ products }) {
  return (
    <View>
      {products?.length !== 0 ? (
        <FlatList
          data={products}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alert(`${item.rating}`)}>
              <View style={[styles.item]}>
                <MostSold item={item} />
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
