import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Timepicker = () => {
  return (
    <View style={styles.container} >
        <Text style={{color:'#000', fontWeight:'bold', marginHorizontal:10, fontSize:18}}  >Select timings</Text>
        <View style={styles.subContainer} >
            <Text>Timepicker</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:10,
      },
      subContainer:{
        backgroundColor: '#57102c',
        margin:5,
        borderRadius:10,    
        padding:15,
        elevation:5
      }
})

export default Timepicker