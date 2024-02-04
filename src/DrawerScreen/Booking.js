import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const Booking = () => {

  const navigation = useNavigation();

  const HistoryHandle = ()=>{
    navigation.navigate('History')
  }

  return (
    <LinearGradient 
    colors={['#57102c','#ffecd2','#57102c']}
    start={{x:0.5, y:0.05}}
    // x = 0 : right || left = 1
    end ={{x:1,y:3}}

    style={{flex:1}} >

      <View style={{marginHorizontal:10,marginVertical:40}} >
        <Text style={{color:'#ffecd2',fontWeight:'bold',fontSize:40}} >My Bookings</Text>
        <Text style={{color:'#ffecd2',marginVertical:8}} >View all your bookings here</Text>
      </View>

      {/* booking for a day */}
      <LinearGradient
            colors={['#e8d9b3', '#57102c']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0.9, y: 1 }}
            style={styles.chefDayContainer} >
        <View>
          <Text style={styles.textChefDuration} >Chef : Chef for one meal</Text>
          <Text style={styles.textSubDuration} >Check your chefit here</Text>
        </View>

        <Pressable onPress={HistoryHandle} >
          <IonIcons name='arrow-forward' size={20} color='#e8d9b3' />
        </Pressable>

      </LinearGradient>

      {/* booking for a month */}
      <LinearGradient
            colors={['#e8d9b3', '#57102c']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0.9, y: 1 }}
            style={styles.chefDayContainer} >
        <View>
          <Text style={styles.textChefDuration} >Chef for Month</Text>
          <Text style={styles.textSubDuration} >Check your chefit here</Text>
        </View>
        
        <Pressable onPress={HistoryHandle} >
          <IonIcons name='arrow-forward' size={20} color='#e8d9b3' />
        </Pressable>

      </LinearGradient>

      {/* booking for parties */}
      <LinearGradient
            colors={['#e8d9b3', '#57102c']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0.9, y: 1 }}
            style={styles.chefDayContainer} >

        
        <View>
          <Text style={styles.textChefDuration} >Chef for your parties</Text>
          <Text style={styles.textSubDuration} >See your party chef booking</Text>
        </View>

        <Pressable onPress={HistoryHandle} >
          <IonIcons name='arrow-forward' size={20} color='#e8d9b3' />
        </Pressable>
      </LinearGradient>

    </LinearGradient>
  )
}

export default Booking

const styles = StyleSheet.create({
  chefDayContainer:{
    margin:5,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:20,
    elevation:3
    
  },
  textChefDuration:{
    fontWeight:'bold',
    color:'#000',
    fontSize:18
  },
  textSubDuration:{
    color:'#000',
    marginVertical:5
  }
})