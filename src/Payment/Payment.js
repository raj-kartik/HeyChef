import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const Payment = () => {
    const route = useRoute();
    const { price } = route.params || {};
    return (
        <LinearGradient
        colors={['#57102c', '#ffecd2', '#57102c']}
        start={{ x: 0.5, y: 0.05 }}
        // x = 0 : right || left = 1
        end={{ x: 1, y: 3 }}

        style={{ flex: 10 }} >

            {/* payment gatway */}
            <View style={styles.PaymentView} ></View>

            {/* payment bottom */}
            <View style={styles.PaymentTextView} >
                <Pressable style={styles.PaymentButton} >
                    <View
                        style={{ padding: 10, margin: 5, backgroundColor:'#57102c',elevation:2, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ marginRight: 5, fontSize: 18, color: 'white' }} >Pay</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }} >₹{price}</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffecd2',
    },
    PaymentView:{
        flex:9
    },
    PaymentText: {
        color: 'black'
    },
    PaymentButton: {

    },
    PaymentTextView:{
        flex:1,
    }
})

export default Payment