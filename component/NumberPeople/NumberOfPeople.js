import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import IonIcons from 'react-native-vector-icons/Ionicons'

const NumberOfPeople = () => {

    const [numOfPeople, setNumOfPeople ] = useState(0);
    const setPeople = (people) => {
        setNumOfPeople(people);
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#d1c5a9',padding:10, margin: 2, borderRadius: 10 }} >
            <View style={{ flexDirection: 'row', paddingVertical:8 ,justifyContent:'space-between' ,alignItems: 'center', marginHorizontal: 8, borderBottomWidth:0.5,borderBottomColor:'#000' }} >

                <View style={{ flexDirection: 'row', alignItems:'center'}} >
                    <AntDesign name='addusergroup' style={{ paddingRight:5 }} size={20} color={'#000'} />
                    <Text style={{color:'#000'}} >Select number of people</Text>
                </View>

                <View style={{flexDirection:'row', backgroundColor:'#faf0d9',borderRadius:10,marginHorizontal:10,alignItems:'center', paddingHorizontal:10}} >

                    <Pressable onPress={()=>setPeople(numOfPeople+1)} >
                        <IonIcons name='add-circle-sharp' size={25} color={'#401d11'} />
                    </Pressable>

                    <View style={{marginHorizontal:2,padding:10,borderRadius:60}} >
                        <Text style={{fontSize:20, color:'#000'}} >{numOfPeople }</Text>
                    </View>

                    <Pressable onPress={()=>setNumOfPeople((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))}  >
                        <IonIcons name='remove-circle-sharp' size={25} color={'#401d11'} />
                    </Pressable>

                </View>


            </View>
            
            <View style={{flexDirection:'row',marginVertical:5,alignItems:'center',paddingHorizontal:5  }} >
                <Text style={{fontSize:20,color:'#000', color:'#401d11',marginHorizontal:5}} >₹</Text>
                <Text style={{color:'#000'}} >Extra </Text>
                <Text style={{color:'#000',fontWeight:'bold'}} >₹50 per person </Text>
                <Text style={{color:'#000'}} >will be added after 4 members</Text>
            </View>

            <View style={{flexDirection:'row',marginLeft:5,alignItems:'center',paddingHorizontal:5  }} >
                <IonIcons name='time-outline' size={20} color='#401d11' style={{paddingRight:5}} />
                <Text style={{color:'#000'}} >Total cooking time </Text>
                <Text style={{color:'#000',fontWeight:'bold'}} >1.5 hours</Text>
            </View>
        </View>
    )
}

export default NumberOfPeople