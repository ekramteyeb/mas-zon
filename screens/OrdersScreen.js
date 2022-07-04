import { StyleSheet, Text, SafeAreaView , FlatList, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DataTable } from 'react-native-paper';
import { useSelector } from 'react-redux';
import tw from 'twrnc'

const OrdersScreen = () => {
  const navigate =  useNavigation()
  const state = useSelector(state => state.nav)
    console.log(state.orders.length, 'orders')
    console.log(state.cart.length, 'cart')
  const renderItem = ({ item }) => {
      
     
      return (
        <DataTable.Row style={styles.item}>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>{state.user.name}</DataTable.Cell>
            <DataTable.Cell>OnGoin</DataTable.Cell>
            <DataTable.Cell><Button title="Edit"/></DataTable.Cell>
            <DataTable.Cell><Button color="red" title="Dele"/></DataTable.Cell>
        </DataTable.Row>
    )
    };

  return (
    <SafeAreaView style={styles.container}>
    
      <DataTable>
          <DataTable.Header style={tw`bg-blue-200`}>
            <DataTable.Title>Order Id</DataTable.Title>
            <DataTable.Title>Cust Name</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
            <DataTable.Title>Edit</DataTable.Title>
            <DataTable.Title>Delete</DataTable.Title>
          </DataTable.Header>
          <FlatList
             data={state.orders}
            renderItem={renderItem}
            keyExtractor={item => item.id}
      />
      </DataTable>
    </SafeAreaView>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: StatusBar.currentHeight || 0,
      },

      item: {
        backgroundColor: 'lightgray',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 6,
      },
      title: {
        fontSize: 38,
      },
})