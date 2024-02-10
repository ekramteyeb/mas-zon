import React from 'react'
import { Tab, Text, TabView } from 'react-native-elements'
import { View } from 'react-native'
import tw from 'twrnc'
import MostSoldLists from './MostSoldLists'
import { useSelector } from 'react-redux'

export default function Tabs() {
  const [index, setIndex] = React.useState(0)
  const state = useSelector((state) => state.nav)
  const randomRecent = Math.floor(Math.random() * state.products?.length)
  const randomFavorite = Math.floor(Math.random() * state.products?.length)

  return (
    <View style={{ height: '30%' }}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'gray',
          height: 5
        }}
        variant="primary"
      >
        <Tab.Item
          title="Recent"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'heart', type: 'ionicon', color: 'purple' }}
        />
        {/*  <Tab.Item
          title="home"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'home', type: 'ionicon', color: 'white' }}
        /> */}
        <Tab.Item
          title="cart"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
        {/*  <Tab.Item
          title="soup"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'home', type: 'ionicon', color: 'white' }}
        /> */}
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={[tw`bg-white `, { width: '100%' }]}>
          <MostSoldLists
            products={state.products ? [state.products[randomRecent]] : []}
          />
        </TabView.Item>
        <TabView.Item style={[tw`bg-gray-200`, { width: '100%' }]}>
          <MostSoldLists
            products={state.products ? [state?.products[randomFavorite]] : []}
          />
        </TabView.Item>
        <TabView.Item
          style={{
            backgroundColor: 'lightgreen',
            width: '100%'
          }}
        >
          <MostSoldLists products={state.cart} />
        </TabView.Item>
      </TabView>
    </View>
  )
}
