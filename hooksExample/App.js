import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
 

export default function App() { 
  const [userName, setUserName] = useState('Hooks');

  return (
      <View style={styles.container}>     
      <Text style={styles.title}>Hooks example</Text>
      
       <TextInput 
        onChangeText={setUserName}
        placeholder="Enter name"
        value={userName}
        style={styles.textInput}
      />
         
         <Text          
         style={styles.textOutput}
         >My name is {userName}</Text>
    
      </View> 
  );
}




const styles = StyleSheet.create({
  title:{
    fontSize:40
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textInput:{
    borderColor:'#efefef',
    borderWidth:2,
    margin:10,
    padding:5,
    fontSize:20,
    width:200
  },

  textOutput:{
   fontSize:30,
   margin:10,
   color:'blue'
  }
});
