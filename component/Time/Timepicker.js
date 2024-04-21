import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../styles/Colors';

const Timepicker = () => {
  const hours = Array.from({ length: 19 }, (_, index) => index+6);
  const [pickHour, setPickHour] = useState(""); // Initialize state for selected hour

  const handleHourSelection = (hour) => {
    setPickHour(hour.toString()); // Update selected hour when TouchableOpacity is pressed
  };

  const [pickMinute,setPickMinute] = useState("");
  const minutes =[0,15,30,45];

  const handleMinSelection = (minute)=>{
    setPickMinute(minute.toString());
  }

  console.log("hour: ",pickHour);
  console.log("minute: ",pickMinute);

  return (
    <View >

      {/* HOUR */}
      <View style={{ marginHorizontal: 7, backgroundColor:COLORS.specialBg, padding: 15, borderRadius: 8, marginTop: 10, elevation: 2 }} >
      <Text style={{ color: COLORS.primary, fontWeight: "600", fontSize: 20 }}>At What Time?</Text>
      <ScrollView horizontal >
        {hours.map((hour) => (
          <TouchableOpacity key={hour} onPress={() => handleHourSelection(hour)} style={{ backgroundColor: COLORS.primary, padding: 10, margin: 2, borderRadius: 100, width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color:COLORS.secondary }}>{hour}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>
      

      {/* MINUTE */}
      <View style={{ marginHorizontal: 7,marginTop:5,borderRadius: 8,}} >
      <View style={{flexDirection:"row", justifyContent:"space-around"}} >
        {minutes.map((minute) => (
          <TouchableOpacity key={minute} onPress={() => handleMinSelection(minute)} style={{ backgroundColor: COLORS.primary, padding: 10, margin: 2, justifyContent: "center", alignItems: "center", flex:1, borderRadius:10 }}>
            <Text style={{ fontSize: 20, color:COLORS.secondary }}>{minute}</Text>
            <Text style={{color:"#fff"}} >min</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
      
    </View>
  );
};

export default Timepicker;
