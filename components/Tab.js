import React from 'react'
import { Tab, Text, TabView } from 'react-native-elements'
import { View } from 'react-native'
import tw from 'twrnc'

export default function Tabs() {
  const [index, setIndex] = React.useState(0)

  return (
    <View style={{ height: 160 }}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
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
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
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
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item
          style={{
            backgroundColor: 'orange',
            width: '100%'
          }}
        >
          <Text h1>Cart</Text>
        </TabView.Item>
        {/*  <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item> */}
        {/* <TabView.Item style={{ backgroundColor: 'purple', width: '100%' }}>
          <Text h1>Soup hhhhhh</Text>
        </TabView.Item> */}
      </TabView>
    </View>
  )
}
