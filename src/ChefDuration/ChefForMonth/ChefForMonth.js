import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ChefForMonth = () => {

  const navigation = useNavigation();
  return (
    <View style={{flex:1, backgroundColor:'#000', justifyContent:'center',alignItems:'center'}} >
      <TouchableOpacity style={{backgroundColor:'white',padding:10, borderRadius:5}} onPress={()=>navigation.navigate('Booking Details')} >
        <Text style={{color:'black'}} >Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChefForMonth