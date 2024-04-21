import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Pressable, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import RNFS from 'react-native-fs';

export default function Login() {
  // useState
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const handleLoginButton = async () => {

    try{

      const path = RNFS.DocumentDirectoryPath + '/Login.json';
      
      console.log(path);
      
      const existingData = await  RNFS.exists(path) ? JSON.parse(await RNFS.readFile(path)) : [];
      
      const user = existingData.find((u)=> u.username === username && u.password == pass);
      if(user){
        setErrorMessage('');
        navigation.navigate('Blank');
      }
      else{
        setErrorMessage('Invalid username or password');
      }
      
    }
    catch(err){
      console.error("Error Reading data from JSON file", err); 
    }
  }


  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      setErrorMessage('');
    })

    return ()=> clearTimeout(timeoutId)
  },2000);



  return (
    
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'android' ? 'height' : undefined}
      style={styles.container} 
    >

      <View style={{flex:1}} >
        <Image style={styles.iconFixed} source={require('../loginImage/loginside.png')} />
      </View>

        
      <View style={{justifyContent:'center', position:"fixed",marginBottom:40,flex:10}} >
        <View style={{alignItems:'center'}} >
          <Image style={{width:100,height:50, marginBottom:5}} source={require('../loginImage/logo.png')} />
        </View>

        <View style={styles.userPassView}  >
          <View style={styles.inputMargin} >
            <Text style={{ color: '#000', fontWeight: 'bold' }} >username</Text>
            <TextInput value={username} autoCapitalize="none" autoCompleteType="off" onChangeText={text => setUsername(text)} style={styles.textInput} />
          </View>

          <View style={styles.inputMargin} >
            <Text style={{ color: '#000', fontWeight: 'bold' }} >password</Text>
            <TextInput value={pass} secureTextEntry={true} autoCapitalize="none" onChangeText={text => setPass(text)} style={styles.textInput} />
          </View>
        </View>

        <TouchableOpacity onPress={handleLoginButton} >
          <LinearGradient
            colors={['#d4c8ae', '#57102c']}
            start={{ x: 0.1, y: 0.0 }}
            end={{ x: 1, y: 1 }}
            style={{ marginVertical: 8, borderRadius: 10, justifyContent:'center',alignItems:'center' }}
          >
            <Text style={styles.button} >Login</Text>

          </LinearGradient>
        </TouchableOpacity>
        {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}

        <View style={{ flexDirection: 'row', alignItems:'center',justifyContent:'center' }} >
          <Text style={{ color: '#fff', marginHorizontal: 2 }} >New User?</Text>
          <Pressable onPress={() => navigation.navigate('Signup')} >
            <Text style={{ color: '#fff', fontWeight: 'bold' }} >Register</Text>
          </Pressable>
        </View>
      </View>

      <View style={{flex:1}} >
        <Image  source={require('../loginImage/loginside.png')} />
      </View>

    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#57102c'
  },
  textInput: {
    width:'100%',
    backgroundColor: '#edebe6',
    borderRadius: 10,
    color: 'black',
    justifyContent:'flex-start'

  },
  userPassView: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#d4c8ae',
    width:380,
    position:"fixed"
  },
  inputMargin: {
    marginVertical: 10
  },
  button: {
    paddingHorizontal: '35%',
    paddingVertical: 10,
    borderRadius: 10,
    // backgroundColor: 'red',
    marginVertical: 10,
    color: '#fff',
    fontWeight: 'bold',
    justifyContent:'center',
    alignItems:'center'
  },
  iconFixed:{
    width: 400, 
    height: 400, 
    position:"absolute",
    left:0,
    top:1,
    top:-200
  }
})