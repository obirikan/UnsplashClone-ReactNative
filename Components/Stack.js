import React from 'react'
import { StyleSheet,Image, View,Button,ScrollView,Text } from 'react-native';
// import Header from './Header';
import Content from './Content';
// import All from './All.js';
const Stack = ({navigation}) => {
  return (
    <>
    <ScrollView style={styles.container3}>
      <Content/>
    </ScrollView>
  <View style={styles.container2}>
    <Text style={styles.txt}
    onPress={() =>
      navigation.navigate('Profile', { name: 'Janey' })
    }>
      home
  </Text>
    <Text style={styles.txt}
    onPress={() =>
      navigation.navigate('Profile', { name: 'Janet' })
    }
    >About</Text>
    <Text style={styles.txt}>Contact</Text>
    <Text style={styles.txt}>Find</Text>
  </View> 
    </>
  )
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'grey',
  },
  container2: {
    flex: 0.1,
    backgroundColor: '#03071e',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
  container3: {
    flex: 3,
    // backgroundColor: 'yellow',
  },
  box:{
    backgroundColor:'white',
    color:'black',
    margin:10,
    borderRadius:100/20
  },
  txt:{
    color:'white',
    fontSize:20,
    margin:10
  }

});
export default Stack