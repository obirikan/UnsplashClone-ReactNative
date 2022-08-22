import axios from 'axios'
import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
// import axios from 'axios'

const Content = () => {

  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.text}>The Window</Text>
            <Image 
            source={{uri:'https://images.unsplash.com/photo-1661102603866-88980547aaac?ixid=MnwzNTc3MjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2MTE4NTcwNw&ixlib=rb-1.2.1'}}
            style={styles.tinyLogo}
            />
        </View>

        <View style={styles.box}>
            <Text style={styles.text}>The Window</Text>
            <Image 
            source={{uri:'https://images.unsplash.com/photo-1661102603866-88980547aaac?ixid=MnwzNTc3MjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2MTE4NTcwNw&ixlib=rb-1.2.1'}}
            style={styles.tinyLogo}
            />
        </View>

        <View style={styles.box}>
            <Text style={styles.text}>The Window</Text>
            <Image 
            source={{uri:'https://images.unsplash.com/photo-1661102603866-88980547aaac?ixid=MnwzNTc3MjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2MTE4NTcwNw&ixlib=rb-1.2.1'}}
            style={styles.tinyLogo}
            />
        </View>

        <View style={styles.box}>
            <Text style={styles.text}>The Window</Text>
            <Image 
            source={{uri:'https://images.unsplash.com/photo-1661102603866-88980547aaac?ixid=MnwzNTc3MjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2MTE4NTcwNw&ixlib=rb-1.2.1'}}
            style={styles.tinyLogo}
            />
        </View>

        <View style={styles.box}>
            <Text style={styles.text}>The Window</Text>
            <Image 
            source={{uri:'https://images.unsplash.com/photo-1661102603866-88980547aaac?ixid=MnwzNTc3MjF8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2MTE4NTcwNw&ixlib=rb-1.2.1'}}
            style={styles.tinyLogo}
            />
        </View>

        
    </View>
  )
}

const styles=StyleSheet.create({
    tinyLogo: {
        width: 300,
        height: 400,
      },
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        marginBottom:10
    },
    box:{
        marginTop:20
    }
})

export default Content