import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Veg from '../VegNonVeg/Veg/Veg';
import NonVeg from '../VegNonVeg/NonVeg/NonVeg';

const Suggestions = () => {

    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator  screenOptions={{tabBarLabelStyle: { fontSize: 14, fontWeight:'bold' },tabBarStyle: { backgroundColor: '#57102c',tabBarGap: 10, },}} >
        <Tab.Screen options={{tabBarActiveTintColor:'#faf0d9',}} name='Veg' component={Veg} />
        <Tab.Screen options={{tabBarActiveTintColor:'#faf0d9',}} name='Non Veg' component={NonVeg} />
    </Tab.Navigator>
  )
}

export default Suggestions