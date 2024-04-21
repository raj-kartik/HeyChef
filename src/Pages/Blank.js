import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from './Home/Home';
import CustomBottomTabBar from '../../component/CustomNavigation/Customnav';
import Booking from '../DrawerScreen/Booking';
import AddPost from './AddPost/AddPost';
import Search from './Search/Search';
import Suggest from '../Suggest/Suggest';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Blank = () => {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator initialRouteName='Home' tabBar={(props)=><CustomBottomTabBar {...props} />} screenOptions={{
        headerShown:false,}} >
        <Tab.Screen name='Home' component={Home} options={{tabBarLabel:"Home", icon:"rest"}} />
        <Tab.Screen name='Bookings' component={Booking} options={{tabBarLabel:"Bookings", icon:"book"}} />
        <Tab.Screen name='AddPost' component={AddPost} options={{tabBarLabel:"Add Post", icon:"plus"}} />
        <Tab.Screen name='Search' component={Search} options={{tabBarLabel:"Search", icon:'search1'}} />
        <Tab.Screen name='Suggest' component={Suggest} options={{tabBarLabel:"Suggest", icon:"export"}} />
      </Tab.Navigator>
  )
}

export default Blank