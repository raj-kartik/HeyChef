import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import React from 'react'

export default function Button1({ name }) {

  return (
    <View>

      <View style={styles.button}>

        <Text style={{ color: '#000', fontWeight: 'bold', textAlign: 'center' }} >{name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: '35%',
    paddingVertical: 10,
    borderRadius: 10,
    // backgroundColor: 'red',
    marginVertical: 10
  }
})