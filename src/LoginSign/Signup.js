import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function Signup() {

  const [name, setName] = useState('');
  const [num, setNum] = useState('');

  const nameHandle = (text) => {
    setName(text);
  }

  const contactHandle = (no) => {
    setNum(no);
  }
  return (
    <View style={{ flex: 1 }} >
      <LinearGradient
        colors={['#57102c', '#ffecd2', '#57102c']}
        start={{ x: 0.5, y: 0.05 }}
        // x = 0 : right || left = 1
        end={{ x: 1, y: 3 }}
        style={{ flex: 1 }} >

        <View style={{ flex: 2 ,marginBottom:20}} >
          <View style={{ alignItems: 'center' }} >
            <Image style={{ width: 100, height: 50, marginTop:10 }} source={require('../loginImage/logo.png')} />
          </View>
          <Text style={{ color: '#fff', marginHorizontal: 5, fontWeight: 'bold', fontSize: 20 }} >Signup</Text>
        </View>


        <View style={{ flex: 10 }} >
          
          <View style={{margin:5, borderRadius:5}} >
            <View >
              <Text style={styles.TextNameView} >Name</Text>
              <TextInput value={name} onChangeText={(text) => nameHandle(text)} style={styles.textInputView} />
            </View>

            <View style={{marginTop:10}} >
              <Text style={styles.TextNameView} >Number no.</Text>
              <TextInput keyboardType='numeric' maxLength={10}  value={num} onChangeText={(num) => contactHandle(num)} style={styles.textInputView} />
            </View>
          </View>

          <View>
            <View></View>
          </View>

        </View>

        <View style={{ flex: 1 }} >
          <TouchableOpacity style={styles.buttonSign} >
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 15 }} >Register</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  TextNameView: {
    fontSize: 16,
    color: '#d4c8ae',
    marginHorizontal: 10,
    marginVertical:0,
  },
  buttonSign: {
    alignItems: 'center', 
    backgroundColor: '#d4c8ae', 
    padding: 12, 
    marginHorizontal: 5, 
    borderRadius: 8
  },
  textInputView:{
    borderBottomWidth:0.5,
    borderBottomColor:'#fff',
    fontSize: 17, 
    color: '#fff', 
    borderRadius: 14, 
    marginHorizontal: 5 
  }
})