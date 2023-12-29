import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const NonVeg = () => {
    return (
        <LinearGradient
            colors={['#57102c', '#ffecd2', '#57102c']}
            start={{ x: 0.5, y: 0.05 }}
            // x = 0 : right || left = 1
            end={{ x: 1, y: 3 }}
            style={{ flex: 10 }} >
            <Text>NonVeg</Text>
        </LinearGradient>
    )
}

export default NonVeg