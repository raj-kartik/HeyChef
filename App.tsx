import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/LoginSign/Login';
import Blank from './src/Pages/Blank';
import Details from './src/Pages/Details/Details';
import Signup from './src/LoginSign/Signup';
import ChefForDay from './src/ChefDuration/ChefForDay/ChefForDay';
import ChefForMonth from './src/ChefDuration/ChefForMonth/ChefForMonth';
import ChefForParty from './src/ChefDuration/ChefForParty/ChefForParty';
import RoyalFullTimeChef from './src/ChefDuration/RoyalFullTimeCook/RoyalFullTimeChef';
import BookingDetails from './src/Bookings/BookingDetails';
import Payment from './src/Payment/Payment';
import { AuthProvider, useAuth } from './context/AuthContext';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <AuthProvider>

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
          <Stack.Screen name='Blank' options={{ headerShown: false }} component={Blank} />
          <Stack.Screen name='Signup' options={{ headerShown: false }} component={Signup} />
          <Stack.Screen name='ChefForDay' options={{ headerShown: false }} component={ChefForDay} />
          <Stack.Screen name='ChefForMonth' options={{ headerShown: false }} component={ChefForMonth} />
          <Stack.Screen name='ChefParty' options={{ headerShown: false }} component={ChefForParty} />
          <Stack.Screen name='RoyalChef' options={{ headerShown: false }} component={RoyalFullTimeChef} />
          <Stack.Screen name='Profile' component={Details} />
          <Stack.Screen name='Payment' component={Payment} options={{ headerStyle: { backgroundColor: '#57102c' }, headerShadowVisible: false, headerTintColor: '#d4c8ae' }} />
          <Stack.Screen name='Booking Details' options={{ headerStyle: { backgroundColor: '#57102c' }, headerTintColor: '#d4c8ae' }} component={BookingDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}