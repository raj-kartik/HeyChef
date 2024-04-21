import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { NonVegFood } from '../../../fakeData/Dish/dish'
import { Image } from 'react-native-animatable';
import useCart from '../../../component/Hooks/useCart';
import { COLORS } from '../../../component/styles/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'

const NonVeg = () => {

    const foodData = NonVegFood.indianNonVegetarianFood;
    const {toggleCart, isItemInCart, } = useCart();

    const renderItem=({item})=>{
        return(
            <View style={{justifyContent:"center",alignItems:'center'}} >
            <View 
               style={{
                   backgroundColor:COLORS.secondary, 
                   marginVertical:5,
                   width:'97%', 
                   padding:5, 
                   borderRadius:8,
                   justifyContent:'space-between',
                   flexDirection:'row',
               }}
           >

           <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
               <View style={{margin:10}} >
                   <Image source={{ uri: item.imagUrl }} style={{ width: 80, height: 80, borderRadius:50, borderWidth:2, padding:13, borderColor:COLORS.primary }} />
               </View>

               <View >
                   <View style={{flexDirection:'row', justifyContent:'space-between'}} >
                       <Text style={{color:COLORS.primary, fontSize:25, fontWeight:'bold'}} >{item.dishName}</Text>
                   </View>

                   <Text style={{color:'#f2a030',fontSize:18, fontWeight:'bold'}} >Ingredients</Text>
                    <Text style={{fontSize: 12, color: COLORS.primaryText}}>
                        {item.ingredients.map((ingredient, index) => (
                            <React.Fragment key={index}>
                            {ingredient}{(index + 1) % 3 === 0 ? '\n' : ', '}
                            </React.Fragment>
                        ))}
                    </Text>


               </View>
           </View>
           <View style={{padding:10,borderRadius:5,justifyContent:'center',alignItems:'center',marginRight:5}}  >

               <TouchableOpacity onPress={() => toggleCart(item)} >
                   <View>
                       {isItemInCart(item.id)?
                           <Ionicons name="fast-food" color='#f2a030' size={30} style={{backgroundColor:"white", padding:7, borderRadius:30, borderWidth:1, borderColor:COLORS.primary}}  />
                           :
                           <Ionicons name="fast-food-outline" size={30} style={{backgroundColor:"white", padding:7, borderRadius:30, color:'#57102c', borderWidth:1, borderColor:COLORS.primary}}   />
                       }
                   </View>
               </TouchableOpacity>
           </View>
       </View>
       </View>
        )
        
    }
    return (
        <View>
            <FlatList
                data={foodData}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default NonVeg