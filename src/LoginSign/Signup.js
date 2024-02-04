import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import RNFS from 'react-native-fs';

export default function Signup() {

  // const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSignup = async() =>{
    try{
      const path = RNFS.DocumentDirectoryPath + '/Login.json';

      let existingData = [];


      if(await RNFS.exists(path)){
        const fileContent = await RNFS.readFile(path);
        existingData = JSON.parse(fileContent);

        console.log(fileContent);
      }

      const newUser = {
        id: existingData.length + 1,
        username,
        password
      };

      console.log(newUser);

      existingData.push(newUser);

      await RNFS.writeFile(path, JSON.stringify(existingData));
      setUsername('');
      setPassword('');
      navigation.navigate('Login');
    }
    catch(err){
      console.error('Error writing data to AsyncStorage', err);
    }

  }


  return (
    <View style={{ flex: 1 }} >
      <LinearGradient
        colors={['#57102c', '#ffecd2', '#57102c']}
        start={{ x: 0.5, y: 0.05 }}
        // x = 0 : right || left = 1
        end={{ x: 1, y: 3 }}
        style={{ flex: 1 }} >

        <View style={{ flex: 2 ,marginBottom:20}} >
          <View style={{ alignItems: 'center' }} >
            <Image style={{ width: 100, height: 50, marginTop:10 }} source={require('../loginImage/logo.png')} />
          </View>
          <Text style={{ color: '#fff', marginHorizontal: 5, fontWeight: 'bold', fontSize: 20 }} >Signup</Text>
        </View>


        <View style={{ flex: 10 }} >
          
          <View style={{margin:5, borderRadius:5}} >
            
            {/* <View style={styles.TextNameView} >
              <Text  >Name</Text>
              <TextInput value={name} onChangeText={(text) => nameHandle(text)} style={styles.textInputView} />
            </View> */}

            <View style={styles.TextNameView} >
              <Text  >Username</Text>
              <TextInput value={username} onChangeText={setUsername} style={styles.textInputView} />
            </View>

            <View style={styles.TextNameView} >
              <Text>Password</Text>
              <TextInput value={password} secureTextEntry={true}  onChangeText={setPassword} style={styles.textInputView} />
            </View>

          </View>

        </View>

        <View style={{ flex: 1 }} >
          <TouchableOpacity style={styles.buttonSign}  onPress={handleSignup} >
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 15 }} >Register</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  TextNameView: {
    fontSize: 16,
    color: '#d4c8ae',
    marginHorizontal: 10,
    marginVertical:10,
  },
  buttonSign: {
    alignItems: 'center', 
    backgroundColor: '#d4c8ae', 
    padding: 12, 
    marginHorizontal: 5, 
    borderRadius: 8
  },
  textInputView:{
    borderWidth:0.5,
    borderBottomColor:'#fff',
    fontSize: 17, 
    color: '#fff', 
    borderRadius: 14, 
    marginHorizontal: 5,
  }
})