import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet,Image, View,Button,ScrollView,Text } from 'react-native';
import App from '../App';

const All = ({navigation}) => {
  return (
   <View>
      <Text style={styles.txt}>Home</Text>
      <Text style={styles.txt}>About</Text>
      <Text style={styles.txt}>Contact</Text>
      <Text style={styles.txt}>info</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    container2: {
      flex: 0.1,
      backgroundColor: '#03071e',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      
    },
    txt:{
      color:'white',
      fontSize:20,
      margin:10
    }
  
  });

export default All