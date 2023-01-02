import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, VirtualizedList, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import apiKey from '../apiKey';
import FoodItem from '../components/FoodItem';

const Post = "https://yorickdv.be/wp-json/wp/v2/posts/"
let PostNum = -1
const foodInfo = [
]
let titleNum = 0
let contentNum = 0

const FoodScreen = navigation =>{

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index+1}`
});
  
const getItemCount = (data) => data.length;
  

//api ophalen info
    const [foods, setFoods] = useState([]);
    const getFoodsByDefault = async () => {
        //getting title
        try {
          const response = await fetch(Post, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "food144.p.rapidapi.com",
              "x-rapidapi-key": apiKey
            }
          })
          const json = await response.json();
          while (PostNum < json.length - 1){
            PostNum++
            let Title = json[PostNum].title.rendered
            let Status = json[PostNum].status
            let Excerpt = json[PostNum].excerpt.rendered
            let Id = json[PostNum].id
            let Content = json[PostNum].content.rendered
            foodInfo.push([Id, Title, Status, Excerpt, Content])
          }
          setFoods(foodInfo.results);
        } catch (error) {
          console.error(error);
        }
      }
      
      useEffect(() => {
        getFoodsByDefault();//laad foods wanneer het scherm laadt
      }, []);

      while (titleNum < foodInfo.length && contentNum < foodInfo.length){
        return (
          <SafeAreaView style={styles.container}>
            <VirtualizedList
              data={foodInfo}
              initialNumToRender={20}
              keyExtractor={item => item.id}
              renderItem = {({item}) =>
                <FoodItem
                  id={item.id}
                  title={foodInfo[titleNum++][1]}
                  content={foodInfo[contentNum++][4]}
                  navigation={navigation}
                  keyExtractor={item => item.key}
                />
              }
              getItemCount={getItemCount}
              getItem={getItem}
            />
          </SafeAreaView>
        );
      }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    
  }
});

export default FoodScreen;





/* <View style={styles.container}>
    <FoodItem title={PostNum}></FoodItem>
    <StatusBar style="auto" />
</View> */





/* <TextInput
placeholder="search Food"
style={styles.input}
onChangeText={getMoviesByTitleSearch}//geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
/> */