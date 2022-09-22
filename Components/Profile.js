import { StyleSheet,Image, View,Button,ScrollView,Text } from 'react-native';

const Profile = () => {
    return (
        <>
      <View style={styles.container1}>
          <Text style={styles.txt2}>Hello world</Text>
      </View>
      <View style={styles.container2}>
        <ScrollView  horizontal={true}>
         <View style={styles.scroll}>
          <Text style={styles.txt}>Linda</Text>
          <Text style={styles.txt}>tracy</Text>
          <Text style={styles.txt}>John</Text>
          <Text style={styles.txt}>Michaell</Text>
          <Text style={styles.txt}>belinda</Text>
          <Text style={styles.txt}>Charles</Text>
          <Text style={styles.txt}>Kofi</Text>
         </View>
        </ScrollView>
      </View>
        </>
    );
  };
const styles=StyleSheet.create({
   container1:{
    flex:1/2,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
    
   },
   container2:{
    flex:1/7,
    backgroundColor:'green',
   },
   txt2:{
     fontSize:80,
     color:'white'
   },
   scroll:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
   },
   txt:{
    fontSize:34,
    margin:10
   }
})
export default Profile