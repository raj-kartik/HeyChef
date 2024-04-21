// CustomBottomTabBar.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, moderateScale, verticalScale } from '../constants/matrices';
import AntDesign from "react-native-vector-icons/AntDesign"
import { isNestedFrozen } from '@reduxjs/toolkit/dist/serializableStateInvariantMiddleware';

const CustomBottomTabBar = ({ state, descriptors, navigation })  => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={ route.name !=='AddPost'? {
              ...styles.tabItem,       
            }:styles.postStyles}
          >

            {
              route.name !== "AddPost"?(
                <View style={{
                  padding:isFocused?10:0,
                  borderRadius:isFocused?90:0,
                  marginVertical:10,
                  alignItems:"center",
                  justifyContent:"center",
                  height:60,
                  width:60,
              }} >
                  <AntDesign name={options.icon} size={verticalScale(20)} color={isFocused?"#FFE6CC":"#fff"} />
                  <Text style={{
                      fontSize:moderateScale(10),
                      fontWeight:"500",
                      color: isFocused? '#FFE6CC' : '#f7f7f7',
                      }}>{label}
                  </Text>
              </View>
              ):(
                <View style={{
                  padding:isFocused?10:0,
                  borderRadius:isFocused?90:0,
                  marginVertical:10,
                  alignItems:"center",
                  justifyContent:"center",
                  height:53,
                  width:53,
                  backgroundColor: isFocused?"#57102c":null,
                  margin:5,
                  borderRadius:100
              }} >
                  <AntDesign name={options.icon} style={{fontWeight:"600"}} size={verticalScale(18)} color={ isFocused?"#fff":"#000"} />
                  <Text style={{
                      fontSize:moderateScale(9),
                      fontWeight:"500",
                      color: isFocused?"#fff":"#000",
                      }}>{label}
                  </Text>
              </View>
              )
            }
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // height: 60,
    backgroundColor: '#57102c',
    borderTopWidth:1,
    borderColor:"rgba(0, 0, 0, 0.25)",
    paddingHorizontal:moderateScale(13),
    position:"relative",
    bottom:10,
    left:0,
    right:0,
    borderRadius:30,
    marginHorizontal:10,
    marginVertical:0
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:0,
    width:60,
    height:60,
  },
  postStyles:{
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:0,
    width:60,
    height:60,
    backgroundColor:"#FFE6CC", 
    borderRadius:100
  }
});

export default CustomBottomTabBar;