import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import Suggestions from '../../Suggestions/Suggestions'


const ChefForDay = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#57102c', '#ffecd2', '#57102c']}
      start={{ x: 0.5, y: 0.05 }}
      // x = 0 : right || left = 1
      end={{ x: 1, y: 3 }}

      style={{ flex: 10 }} >

      {/* <View style={styles.header} >
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}} >HERE ARE SOME SUGGESTIONS FOR YOU</Text>
      </View> */}
      <View style={{flex:1}} >

        <View style={styles.suggestContainer} >
          <Suggestions />
        </View>

        <View style={{ flex: 0 }} >
          <TouchableOpacity style={{ backgroundColor: '#57102c', elevation: 2, padding: 15, margin: 2, marginHorizontal: 10, marginBottom: 15, borderRadius: 10 }} onPress={() => navigation.navigate('Booking Details')} >
            <Text style={{ color: '#ffecd2', textAlign: 'center', fontWeight: 'bold', fontSize: 15 }} >Continue</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#57102c',
    // padding:10,
    paddingVertical: 14,
    // margin:2,
    // borderRadius:8,
    alignItems: 'center'
  },
  suggestContainer: {
    flex: 10
  }
})

export default ChefForDay