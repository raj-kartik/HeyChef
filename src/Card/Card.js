import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Card = ({name,about,NameSize,AboutSize,color1,heading2 ,color2,fontColor, ImportImage, ImageWidth, ImageHeight}) => {
  return (
        <LinearGradient
            style={styles.container}
            colors={[color1,color2]}
        >
        <View style={styles.cardAbout} >
            <Text style={{fontSize:NameSize, fontWeight:900, color:fontColor}} >{name}</Text>
            <Text style={{fontSize:AboutSize, fontWeight:'bold', color:heading2}} >{about}</Text>
        </View>

        {/* image */}
        <View style={styles.cardImage} >
            <Image  style={{width:ImageWidth,height:ImageHeight, borderRadius:50}} source={ImportImage} />
        </View>

        </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius:8,
        paddingHorizontal:5,
        flexDirection:'row',
        paddingVertical:10,
        elevation:5,
        marginVertical:10
    },
    cardAbout:{
        flex:2,
        // backgroundColor:'red',
        width:'100%'
    },
    cardImage:{
        flex:1,
        // backgroundColor:'blue'
    }
    
})

export default Card