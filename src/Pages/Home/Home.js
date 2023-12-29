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

            {/* HEADER */}
            {/* background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%); */}
            

            {/* POST */}


            <LinearGradient
                colors={['#57102c','#ffecd2','#57102c']}
                start={{x:0.5, y:0.05}}

                // x = 0 : right || left = 1
                end ={{x:1,y:3}}

                style={styles.postContainer}
            >
                <ScrollView>
                    <View style={{ flex: 1 }} >

                        <View style={styles.cardView} >
                            <Card  name={'HeyChef'} fontColor={'#7d5524'} heading2={'#000'} about={'We are here to fulfill your craving'} color1={'#ffecd2'} color2={'#57102c'}  NameSize={60} AboutSize={25} ImportImage={IntroImage} ImageWidth={100} ImageHeight={120} />
                        </View>

                        {/* 

                        <View style={styles.suggestContainer} >
                            < Dish />
                        </View>

                         */}

                        <View style={{ marginHorizontal: 5}} >
                            <Text style={{ color: '#f5eee4', fontFamily:'coolvetica compressed hv' ,fontWeight: 'bold', marginTop: 2, fontSize: 20 }} >Our Service</Text>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} >

                                <View style={{ marginVertical: 5, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
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
                        
                        <View style={{padding:10,backgroundColor:'#ffecd2', margin:5, borderRadius:5, padding:10}} >
                            <Text style={{color:'#7d5524', textAlign:'center',fontWeight:"bold",fontSize:15}} >Get cook for one-time at ₹250</Text>
                        </View>

                        {/* About US */}
                        <View style={{marginHorizontal:5}} >
                            <View>
                                <Card name={'We cook with care'} fontColor={'#ffecd2'} color1={'#57102c'} color2={'#fcb69f'} NameSize={40} ImportImage={AboutImage} ImageWidth={120} ImageHeight={100} />
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </LinearGradient>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
        borderBottomEndRadius:10,
        borderBottomStartRadius:10
    },
    suggestContainer:{
        flexDirection:'row'
    }
})