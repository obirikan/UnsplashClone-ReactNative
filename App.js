import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, View,Button,ScrollView } from 'react-native';
import Header from './Components/Header';
import Content from './Components/Content';
import { useEffect } from 'react';

export default function App() {
  
  return (
    <>
    <View >
      <Header/>
    </View>
    <ScrollView style={styles.container3}>
     <View style={styles.box}>
     <Image
        style={styles.tinyLogo}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
      />
     </View>
     <Content/>
    </ScrollView>
    <View style={styles.container2}>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'grey',
  },
  container2: {
    flex: 0.1,
    backgroundColor: '#03071e',
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

});
