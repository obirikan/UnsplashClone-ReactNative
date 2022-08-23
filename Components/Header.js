import React from 'react'
import { Text,View,StyleSheet,Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Header = () => {
  return (
    <View
     style={style.container}
    >
    <Text style={style.text}>
      Unsplash
      </Text>
      <Image
       style={style.img}
       source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEUAAAD////u7u7t7e35+fn09PT7+/tNTU3j4+NHR0cXFxcwMDAcHBzx8fH19fXc3NxDQ0MrKys9PT0PDw8xMTFqampeXl5vb29WVlbFxcXENFnUAAAEqklEQVR4nO2d61bbMBCEjWQ7josVAhTK+79oKSe6OIpV4l3hlTXzq2dLh/3qi1aKtGkerDp10eRCNqJbF9I21NtI60IirVQjMi0QghCE26cFQhAuEOqLAi8bCrysAi8rmVZNZ9U6JULGRUwckmnVxNe8j+8Ve821cqHJhrr4XhFldR+hCrxsZGVaP2aVg1C5p8G/FbyVDfkHy71NjHTCzsWmi5RXHJqWQp/wQgnN76cjh57ee8asOAnbY8OjY8uYFSvhgYnwIIMwfi9LILwxWrjnve0val2oT4Q6GzH+p/gIGbPirNoYCRmzYqy8VRZCclYgBCEIQQhCWasYQsdD5a6A/UtX2Pti6MakzlWAflKXoWpjyIpceQurS+OsMLcAIQhBCEIGQh2Nn70LBV4XhesFF2UhZMyqaRnFR8ioCqo272Vv4f1W3iAEIQhBmJ9QU73yjBZ8hCb+33I1kPeyEf85bzAfz0BIz6qCqi2+5nurvEEIQhCCEIR0wv2Ph27PgrHbGDoXindE3AgF+yb4CBmziutSLbIuXZ9VVXMLEIIQhCDMT3jjvazv8cq05k3MSvnPLW4cVTB3nnpgHPHZsuoqqNriu3pvlTejl347/+LQ+U0qYTcwSUs9b+F+KD4zk9zIVM6ZGca0QAjCTKsYMq0qOCXrvewFFnA8GWe5QQjC7dMCIQiXVjEEDWKMVugaMb/m6Boh0QqEIATh9lYgXPYivuJ/zIqza4RMqwqqNu9lL7mAchlzCxCC8D6vG69xRkKjiVZXhFPfEmRCK0pa5v+/K6E+eQ3fj4f1eh6YCIdnQhaHP3qJ8HPsUE+kT6dPgRVhEFMnUhYvw8NsPLSoX+czFK3j2mnyVl9a2eqBRjgO03LXiImFcG257IpJKmFiFWNbQsVHuDi3ACEIQQjCLIQ6HIqphOpqVF+5vYBMuNw1gjrik+pJLyrhzGxWtSkqobfasGp7vKraPOG/J4GJ0D5Y6yrviYXQ/kYQghCEIPxRQs1HSFs+ykVoPq2ZCImtHlgInXsFVdvs9tll5Q1CEIIQhCCkE+5/PAz7M3Tkmoal1UNHrmkSXSN469KVrR4wtwAhCEEIQsGEeUcL/X1CnjVvR+jW903XGSph76worR4MlbBvF7tG7LJqmz0gu6y8QQhCEIIQhHTC/Y+H7k9f+0uxU+GbhPa2E1Z5gxCETWN3srtPSP3znvqE1EUum6YFE34w9fr6EEt4fmXp1/Z6FksoQ4lVDPLOPRm6Hg/DtYR+F4TjYJa7RhCrNhnKed5ChnLOLWQIhOULhOWrDsKlrhHUE5YyNA7dYteIfVZtNVXeICxFICxfICxfqVUM6qq+DF2PhxaVo2uEDOXsGiFDWMUoXyAsXyAsXzl3KshQzq4RMpSza4QMYRWjfIGwfIGwfOU8byFDObtGyFDOrhEylPO8hQzVN7cAYXkCYfmqj3D/4yFn1wgZytk1QoZqnlvshXBMEerjyziOj1ajUxx6TIRS/y671XhOEU5MBya2VZ+6S5Vae9AlDBHPzHBYVfotLMRWD2FagqzmXSMorR7CkCirCr5bPb6rJXzhHaMVCEEIwu2tQAhC+YR/AUkFM/3cQSJRAAAAAElFTkSuQmCC'}}
      />
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
         backgroundColor:'#03071e',
         flexDirection:'row'
      },
    text:{
        fontSize:40,
        color:'white',
        position:'relative',
        top:7
    },
    img:{
        width:28,
        height:28,
        position:'relative',
        top:7,
        left:7
     }
})

export default Header