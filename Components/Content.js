
import React,{useEffect,useState} from 'react'
import {View,Text,Image,StyleSheet,FlatList} from 'react-native'
import axios from 'axios'

const Content = () => {
    const [url,seturl]=useState([])

 useEffect(()=>{
    const data=async ()=>{
        await axios('https://api.unsplash.com/photos/?client_id=eTfVP2qU4mPh-ocPPRySEtt872afa99diafIjMu4Zdo')
    .then((res)=>{
        seturl(res.data)
    })}
    data()
 },[])

  return (
    <View style={styles.container}>
        <FlatList
         data={url}
         renderItem={({item})=>(
            <View style={styles.box}>
              <View style={styles.box2}>
                <Image 
                  source={{uri:item.user.profile_image.large}}
                  style={styles.profile}
                />
                <View>
                  <Text style={styles.text2}>{item.user.name}</Text>
                   <View style={styles.cont}>
                      <Text style={styles.bio}>{item.user.bio}</Text>
                   </View>
                </View>
              </View>
            <Image 
               source={{uri:item.urls.regular}}
                style={styles.tinyLogo}
            />
            </View>

         )}
        />
    </View>
  )
}

const styles=StyleSheet.create({
    tinyLogo: {
        width: 300,
        height: 400,
        borderRadius:100/30
      },
    profile:{
        width:50,
        height:50,
        borderRadius:100/0.5
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
    text2:{
        fontSize:20,
        marginTop:5,
        marginLeft:5
    },
    box:{
        marginTop:20
    },
    box2:{
        display:'flex',
        flexDirection:'row',
        // backgroundColor:'grey',
        marginBottom:10,
        width:300
    },
    bio:{
        fontSize:10
    },
    cont:{
        width:200,
        marginLeft:5
    }

})

export default Content