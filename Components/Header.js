import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Header = () => {
  return (
    <View
     style={style.container}
    >
    <Text style={style.text}>HighSchoolMemories</Text>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
         textAlign:'center',
         marginTop:0,
         height:90,
         display:'flex',
         alignItems:'center',
         justifyContent:'center',
         padding:10,
         fontSize:30,
         backgroundColor:'blue'
      },
    text:{
        fontSize:30,
        color:'white'
    }
})

export default Header