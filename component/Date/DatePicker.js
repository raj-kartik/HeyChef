import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import DateTimePicker from 'react-native-ui-datepicker'
import dayjs from 'dayjs';

const DatePicker = () => {


  // today date
  const today = new Date().toISOString().split('T')[0];

  const [value, setValue] = useState(dayjs());


  
  useEffect(()=>{
    if(value){
      // console.log('Date Selected', value);
    }
  },[value]);

  return (
    <View style={styles.container} >
      <Text style={{color:'#fff', fontWeight:'bold', marginHorizontal:10, fontSize:18}} >Select date</Text>
      <View
      style={styles.subContainer} >
      <DateTimePicker
        value={value}
        headerButtonColor='#57102c'
        weekDaysTextStyle={{color:'#57102c'}}

        minimumDate={today}
        mode={['datetime','date','time']}
        onValueChange={(date) => setValue(date)}
        calendarTextStyle={{color:'#57102c'}}
        headerTextStyle={{color:'#57102c',fontWeight:'bold',fontSize:20}}

        selectedItemColor='#57102c'
        yearContainerStyle={{backgroundColor:'#f7f1cd'}}
        monthContainerStyle={{backgroundColor:'#f7f1cd'}}
        />
      </View>
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginVertical:10,
    // elevation:5
  },
  subContainer:{
    backgroundColor: '#ebe0c7',
    margin:5,
    borderRadius:10,
    elevation:5

  }
})