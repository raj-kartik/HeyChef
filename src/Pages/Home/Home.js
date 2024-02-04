import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Card from '../../Card/Card'
import LinearGradient from 'react-native-linear-gradient'

export default function Home() {

    const navigation = useNavigation();
    const AboutImage = require('../../ChefDuration/RoyalFullTimeCook/royalChef.jpeg');
    const IntroImage = require('../../ChefDuration/ChefForParty/birthdayChef.jpeg')

    return (
        <View style={styles.container}>
            <View   style={styles.postContainer}    >
                <ScrollView>
                    <View style={{ flex: 1 }} >

                        <View style={styles.cardView} >
                            <Card  name={'HeyChef'} fontColor={'#ffecd2'} heading2={'#ffecd2'} about={'We are here to fulfill your craving'} color1={'#57102c'} color2={'#57102c'}  NameSize={60} AboutSize={20} ImportImage={IntroImage} ImageWidth={'100%'} ImageHeight={120} />
                        </View>

                        {/* 

                        <View style={styles.suggestContainer} >
                            < Dish />
                        </View>

                         */}

                        <View style={{ marginHorizontal: 5}} >
                            <Text style={{ color: '#f5eee4', fontFamily:'coolvetica compressed hv' ,fontWeight: 'bold', marginTop: 2, fontSize: 20 }} >Our Service</Text>


                            <View style={{ flexDirection: 'row' ,justifyContent: 'space-evenly', alignItems: 'center' }} >

                                <View style={{ marginVertical: 5, justifyContent: 'center' ,alignItems: 'center' ,textAlign: 'center' }} >
                                    <Pressable onPress={()=>navigation.navigate('ChefForDay')}  style={styles.DurationStyle} >
                                        <Image style={styles.DurationImageStyle} source={require('../../Images/chefday.jpeg')} />
                                        <Text style={styles.DurationText} >
                                            Chef for a day
                                        </Text>
                                    </Pressable>
                                </View>

                                <View style={{ marginVertical: 5 }} >
                                    <Pressable style={styles.DurationStyle} onPress={()=>navigation.navigate('ChefForMonth')} >
                                        <Image style={styles.DurationImageStyle} source={require('../../Images/chefmonth.jpeg')} />
                                        <Text style={styles.DurationText} >
                                            Chef for a Month
                                        </Text>
                                    </Pressable>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} >

                                <View style={{ marginVertical: 5, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                                    <Pressable onPress={()=>navigation.navigate('ChefParty')}  style={styles.DurationStyle}>
                                        <Image style={styles.DurationImageStyle} source={require('../../Images/chefparty.jpeg')} />
                                        <Text style={styles.DurationText} >
                                            Chef For Party
                                        </Text>
                                    </Pressable>
                                </View>

                                <View style={{ marginVertical: 5 }} >
                                    <Pressable style={styles.DurationStyle} onPress={()=>navigation.navigate('RoyalChef')} >
                                        <Image style={styles.DurationImageStyle} source={require('../../Images/royalclub.jpeg')} />
                                            <Text style={styles.DurationText} >
                                                Chef for Occasions
                                            </Text>
                                    </Pressable>
                                </View>
                            </View>



                        </View>
                        
                        <View style={{padding:10,backgroundColor:'#e3b3aa', margin:5, borderRadius:5, padding:10}} >
                            <Text style={{color:'#57102c', textAlign:'center',fontWeight:"bold",fontSize:15}} >Get cook for one-time at ₹250</Text>
                        </View>

                        {/* About US */}
                        <View style={{marginHorizontal:5}} >
                            <View>
                                <Card name={'We cook with care'} fontColor={'#ffecd2'} color1={'#57102c'} color2={'#e3b3aa'} NameSize={30} ImportImage={AboutImage} ImageWidth={100} ImageHeight={100} />
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor:'#cfa59b'
    },
    postContainer: {
        flex: 15,
        width: '100%',
    },
    drawerContainer: {
        flex: 1,
        backgroundColor: 'green',
        width: '98%',
        borderRadius: 20,
        marginBottom: 10
    },
    cardView: {
        flex: 1,
        padding: 1,
        // backgroundColor:'white',
        margin: 5,
        borderRadius: 10
    },
    DurationImageStyle: {
        width: 180,
        height: 120,
        borderTopRightRadius: 10,
        borderTopLeftRadius:10,
        marginBottom:5,
        paddingHorizontal:10,
    },
    DurationText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffecd2',
        textAlign: 'center',
        paddingBottom:10,
        // paddingHorizontal:1
    },
    DurationStyle: {
        justifyContent: 'center',
        // alignItems:'center',
        textAlign: 'center',
        elevation:2,
        borderRadius:10,
        backgroundColor:'#57102c'
    },
    suggestContainer:{
        flexDirection:'row'
    }
})