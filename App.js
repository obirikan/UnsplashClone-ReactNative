import { StyleSheet,Image, View,Button,ScrollView,Text } from 'react-native';
import Header from './Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Components/Profile';

import Stack from './Components/Stack.js';
const Stac= createNativeStackNavigator();

export default function App() {
  return (
<>
<Header/>
    <NavigationContainer>
<Stac.Navigator screenOptions={{headerShown: false}}>
        <Stac.Screen name="Homddse" component={Stack}/>
        <Stac.Screen name="Profile" component={Profile} />
</Stac.Navigator>
    </NavigationContainer>
</>

  );
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


