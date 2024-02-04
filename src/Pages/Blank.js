import { View, Text, StyleSheet, Pressable, TouchableOpacity, StatusBar, Image } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from './Home/Home'
import Supscription from '../DrawerScreen/Supscription'
import Booking from '../DrawerScreen/Booking'
import AntDesign from 'react-native-vector-icons/AntDesign'
import IonIcons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome6'
import * as Animatable from 'react-native-animatable';

const Blank = () => {

  const Tabs = createMaterialBottomTabNavigator();

  return (
    <View style={{ flex: 1, }} >
      <View style={styles.headerContainer} >
        {/* logo */}
        <TouchableOpacity style={styles.subHeader} >
          <IonIcons name='location' color='#ffecd2' size={22} />
          <Text style={{ fontWeight: 'bold', color: '#ffecd2' }} >Location</Text>
        </TouchableOpacity>

        {/* name */}

        <View style={styles.subHeader} >
          <Image style={{width:100,height:50, margin:15,padding:15}} source={require('../loginImage/logo.png')} />
        </View>

        {/* profile */}
        <Pressable onPress={() => navigation.navigate('Profile')} style={styles.subHeader} >
          <FontAwesome style={{ marginHorizontal: 5 }} name='circle-user' size={25} color='#ffecd2' />
        </Pressable>
      </View>


      <View style={{flex:9}} >  
      <Tabs.Navigator
        initialRouteName='Home'
        activeColor="#fff"
        inactiveColor="#faf0d9"
        style={{ backgroundColor: '#faf0d9', }}
        barStyle={{ backgroundColor: '#57102c', height:'8%'  }}
      >
        <Tabs.Screen name='Home'
          component={Home}
          options={{
            tabBarColor:'#faf0d9',
            tabBarIcon: ({ color }) => (

              <Animatable.View animation="zoomInUp" >
                <AntDesign name='rest' size={22} color={color} />
              </Animatable.View>
            ),
          }}
        />

        <Tabs.Screen
          name='Bookings'
          component={Booking}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name='book' size={22} color={color} />
            )
          }}
        />

        <Tabs.Screen
          name='Subscription'
          component={Supscription}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name='switcher' size={22} color={color} />
            )
          }}
        />
      </Tabs.Navigator>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  subHeader: {
    marginHorizontal: 12,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  
  headerContainer: {
    flex: 0.6,
    backgroundColor: '#57102c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation:1,
    // marginBottom:3
},
})

export default Blank