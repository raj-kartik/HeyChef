import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Timepicker from '../../component/Time/Timepicker'
import DatePicker from '../../component/Date/DatePicker'
import NumberOfPeople from '../../component/NumberPeople/NumberOfPeople'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const BookingDetails = () => {

  const navigation = useNavigation();


  const amount = 500;
  return (
    <>
      <View
        style={{ flex: 10, backgroundColor:'#fff' }} >

        <ScrollView >

          {/* date picker */}
          <View style={{ flex: 1 }} >
            <DatePicker />
          </View>

          {/* time picker */}
          <View style={{ marginVertical: 3, flex: 1 }} >
            <Timepicker />
          </View>

          {/* number of people */}
          <View style={{ flex: 1, margin:5, elevation:5 }} >
            <NumberOfPeople />
          </View>

        </ScrollView>
      </View>
      {/* paying */}
      <View style={{ flex: 1, backgroundColor: '#fff' }} >

        <Pressable onPress={() => navigation.navigate('Payment', { price: amount })}  >
          <View
            style={{ padding: 10, margin: 5, backgroundColor:'#57102c', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Text style={{ marginRight: 5, fontSize: 18, color: 'white' }} >Book your chef</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }} >₹{amount}</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  )
}

export default BookingDetails