import { View, Text, FlatList, Image, TouchableOpacity, Pressable, FlatListComponent } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { VegFood } from '../../../fakeData/Dish/dish'
import IonIcons from 'react-native-vector-icons/Ionicons'

const Veg = () => {

    const [isPress, setIsPress] = useState(true);

    const addButtonHandle = (itemId, itemInCart, itemAdded) =>{
        console.log(itemId, itemAdded);

        itemAdded = !itemAdded
    }

    const vegDish = VegFood.indianVegetarianFood;
    const RenderItem = ({ item }) => (
        <Pressable style={{backgroundColor:'#57102c', marginHorizontal:5,marginVertical:8,width:'97%',marginRight:30, padding:5, borderRadius:10, flexDirection:'row',justifyContent:'space-between', alignItems:'center'}} >
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                <View style={{margin:10}} >
                    <Image source={{ uri: item.imagUrl }} style={{ width: 80, height: 80, borderRadius:50, borderWidth:2, padding:13, borderColor:'#fff' }} />
                </View>

                <View >
                    <View style={{flexDirection:'row', justifyContent:'space-between'}} >
                        <Text style={{color:'#ffecd2', fontSize:25, fontWeight:'bold'}} >{item.dishName}</Text>
                    </View>

                    <Text style={{color:'#f2a030',fontSize:18, fontWeight:'bold'}} >Ingredients</Text>
                    <Text style={{fontSize:12}} >{item.ingredients.join(', ')}</Text>
                </View>
            </View>
            
            <View style={{padding:10,borderRadius:5,justifyContent:'center',alignItems:'center',marginRight:5}}  >
                <Pressable onPress={ ()=>{addButtonHandle(item.id, item.inCart, item.isAdded), item.isAdded=!item.isAdded }  } >
                    {item.isAdded?
                        <IonIcons name="add-circle" color='#f2a030' size={30}  />: 
                        <IonIcons name="remove-circle" color='#f2a030' size={30}  />
                    }
                    
                </Pressable>
            </View>
        </Pressable>
      );

  return (
    <LinearGradient
        colors={['#57102c', '#ffecd2', '#57102c']}
        start={{ x: 0.5, y: 0.05 }}
        // x = 0 : right || left = 1
        end={{ x: 1, y: 3 }}
        style={{ flex: 10 }} >
            
            <FlatList
                data={vegDish}
                keyExtractor={(item) => item.id.toString()}

                renderItem={({item}) => <RenderItem item={item} /> }
            />

    </LinearGradient>
  )
}

export default Veg