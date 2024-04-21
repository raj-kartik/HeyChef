import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { COLORS } from '../styles/Colors';

const DatePicker = () => {
  const previousDay = dayjs().subtract(1, 'day').toDate(); // Calculate previous day
  const sixMonthsFromNow = dayjs().add(6, 'month').toDate(); // Calculate six months from now

  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    // Extract date part only and log it
    const selectedDate = dayjs(date).format('YYYY-MM-DD');
    console.log('Selected date:', selectedDate);
    setValue(date);
  };

  const onNavigationChange = (event) => {
    const { data } = event.nativeEvent;
    const currentDate = dayjs(value);
    const targetDate = dayjs(data.newDate);
    const maxDate = dayjs(sixMonthsFromNow);

    if (targetDate.isAfter(maxDate) || targetDate.isBefore(currentDate)) {
      event.preventDefault(); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontWeight: 'bold', marginHorizontal: 10, fontSize: 18 }}>Select date</Text>
      <View style={styles.subContainer}>
        <DateTimePicker
          value={value}
          headerButtonColor='#57102c'
          weekDaysTextStyle={{ color: '#57102c' }}
          minimumDate={previousDay} 
          maximumDate={sixMonthsFromNow} 
          mode={['datetime', 'date', 'time']}
          onValueChange={(date) => handleDateChange(date)}
          calendarTextStyle={{ color: '#57102c' }}
          headerTextStyle={{ color: '#57102c', fontWeight: 'bold', fontSize: 20 }}
          selectedItemColor='#57102c'
          yearContainerStyle={{ backgroundColor: '#f7f1cd' }}
          monthContainerStyle={{ backgroundColor: '#f7f1cd' }}
          onChange={onNavigationChange} 
        />
      </View>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    // elevation:5
  },
  subContainer: {
    backgroundColor: COLORS.tertiary,
    margin: 5,
    borderRadius: 10,
    elevation: 5
  }
});
