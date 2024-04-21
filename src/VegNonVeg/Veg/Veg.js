import { View, Text, FlatList, Image, TouchableOpacity, Pressable, FlatListComponent } from 'react-native'
import React from 'react'
import { VegFood } from '../../../fakeData/Dish/dish'
import IonIcons from 'react-native-vector-icons/Ionicons'
import useCart from '../../../component/Hooks/useCart'
import { COLORS } from '../../../component/styles/Colors'

const Veg = () => {
    const vegDish = VegFood.indianVegetarianFood;
    const {toggleCart, isItemInCart, } = useCart();

    const RenderItem = ({ item }) => {
        return<View style={{justifyContent:"center",alignItems:'center'}} >
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
                            <IonIcons name="fast-food" color='#f2a030' size={30} style={{backgroundColor:"white", padding:7, borderRadius:30, borderWidth:1, borderColor:COLORS.primary}}  />
                            :
                            <IonIcons name="fast-food-outline" size={30} style={{backgroundColor:"white", padding:7, borderRadius:30, color:'#57102c', borderWidth:1, borderColor:COLORS.primary}}   />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </View>
       
    };

  return (
    <View   style={{backgroundColor:"white", flex:1, margin:0}}   > 
        <FlatList
            data={vegDish}
            keyExtractor={(item) => item.id.toString()}

            renderItem={({item}) => <RenderItem item={item} /> }
        />
    </View>
  )
}

export default Veg