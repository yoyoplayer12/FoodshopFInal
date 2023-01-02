// import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import apiKey from '../apiKey';


const Post = "https://yorickdv.be/wp-json/wp/v2/posts/"

// content.match[3] = image ==> gaat maar tot 4


const FoodItem = ({ title, content }) => {
  //fixing img url
  let urlWithClutter = content.match(/\<.*?\>/g)[3]
  let startUrl = urlWithClutter.indexOf("http");
  let endurl = urlWithClutter.indexOf(".jpg")
  let urlFull = urlWithClutter.substring(startUrl, endurl+4)
  //end fixing img url
    return(
        <View style={styles.post}>
            <Text style={styles.title}>{title}</Text>
            <Text>{}</Text>
            <Image
              style={styles.image}
              source={{
                uri: urlFull,
              }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      marginLeft: '5%',
    },
    post: {
      borderWidth: 1,
      borderColor: "black",
      marginTop: 10,
    },
    content: {
      backgroundColor: 'red',
      maxWidth: '90%',
      marginLeft: '5%',
      padding: 10,
      overflow: "hidden",
    },
    image: {
      width: '80%',
      height: '80%',
    }
  });
export default FoodItem;