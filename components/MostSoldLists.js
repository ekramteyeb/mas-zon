import React, { memo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import tw from 'twrnc'
import MostSold from '../components/MostSold'

function MostSoldLists({ products }) {
  return (
    <View>
      {products?.length !== 0 ? (
        <FlatList
          data={products}
          initialNumToRender={1}
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
export default memo(MostSoldLists)

const styles = StyleSheet.create({})
