// import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import apiKey from '../apiKey';


// content.match[3] = image ==> gaat maar tot 4


const FoodItem = ({ title, content }) => {
  //fixing img url
  let urlWithClutter = content
  let startUrl = urlWithClutter.indexOf("http");
  let endurl = urlWithClutter.indexOf(".jpg")
  let urlFull = urlWithClutter.substring(startUrl, endurl+4)
  //end fixing img url
  //fixing content
  let contentTextWithClutter = content;
  let startContent = contentTextWithClutter.indexOf(">");
  let endContent = contentTextWithClutter.indexOf("<br>");
  let contentFull = contentTextWithClutter.substring(startContent+1, endContent);
  //end fixing content
  //fixing category
  let categoryWithClutter = content;
  let startCategory = categoryWithClutter.indexOf("<br>");
  let endCategory = categoryWithClutter.lastIndexOf("<br>");
  let categoryFull = categoryWithClutter.substring(startCategory+4, endCategory);
  //end fixing category
  //fixing price
  let priceWithClutter = content;
  let startPrice = priceWithClutter.lastIndexOf("<br>");
  let endPrice = priceWithClutter.lastIndexOf("</p>");
  let priceFull = priceWithClutter.substring(startPrice+21, endPrice);
  //end fixing price

  return(
      <View style={styles.post}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{contentFull}</Text>
          <Text style={styles.category}>{categoryFull}</Text>
          <Text style={styles.price}>Price: {priceFull}</Text>
          <Image
            style={styles.image}
            source={{
              uri: urlFull
            }}
          />
          <Button style={styles.buybutton} title='Add' ></Button>
      </View>
  )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 45,
      fontWeight: 'bold',
      marginLeft: '5%',
      marginTop: 20,
    },
    post: {
      backgroundColor: "rgb(219, 219, 219)",
      marginTop: 10,
      justifyContent: "center",
      alignItems: 'center',
      shadowColor: 'black',
    },
    content: {
      maxWidth: '90%',
      marginLeft: '5%',
      marginBottom: 8,
      marginTop: 20,
      fontSize: 18,
    },
    category: {
      maxWidth: '90%',
      marginLeft: '5%',
      marginBottom: 8,
      fontSize: 18,
    },
    price: {
      maxWidth: '90%',
      marginLeft: '5%',
      marginBottom: 20,
      fontSize: 18,
    },
    image: {
      width: 300,
      height: 300,
      overflow: "hidden",
      borderRadius: 10,
      marginBottom: 20,
    },
  });
export default FoodItem;