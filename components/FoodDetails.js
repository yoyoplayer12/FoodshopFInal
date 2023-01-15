
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import apiKey from '../apiKey';
import { shoppingBasket } from './FoodItem';

const foodDetailsArray = [];
let Content;
let Title;
let categoryFull;
let priceFull;
let urlFull;
let contentFull;

const FoodDetails = props => {

    const [FoodDetails, setFoodDetails] = useState({});



    const getFoodDetailsById = async () => {
        try {
            const url = encodeURI("https://yorickdv.be/wp-json/wp/v2/posts/" + props.foodId)
            const response = await fetch(url, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "food144.p.rapidapi.com",
                    "x-rapidapi-key": apiKey
            }
        })
        const json = await response.json();
        Title = json.title.rendered;
        Content = json.content.rendered;
        //fixing category
        let categoryWithClutter = Content;
        let startCategory = categoryWithClutter.indexOf("<br>");
        let endCategory = categoryWithClutter.lastIndexOf("<br>");
        categoryFull = categoryWithClutter.substring(startCategory+14, endCategory);
        //end fixing category
        //fixing price
        let priceWithClutter = Content;
        let startPrice = priceWithClutter.lastIndexOf("<br>");
        let endPrice = priceWithClutter.lastIndexOf("</p>");
        priceFull = priceWithClutter.substring(startPrice+21, endPrice);
        //end fixing price
         //fixing img url
        let urlWithClutter = Content
        let startUrl = urlWithClutter.indexOf("http");
        let endurl = urlWithClutter.indexOf(".jpg")
        urlFull = urlWithClutter.substring(startUrl, endurl+4)
        //end fixing img url
        //fixing content
        let contentTextWithClutter = Content;
        let startContent = contentTextWithClutter.indexOf("Info:");
        let endContent = contentTextWithClutter.indexOf("<br>");
        contentFull = contentTextWithClutter.substring(startContent+6, endContent);
        //end fixing content


        foodDetailsArray.push([Title])
        setFoodDetails(foodDetailsArray);


    } catch (error) {
      console.error(error);
    }
  }


    useEffect(() => {
        getFoodDetailsById();

    }, []);

    return (
        <ScrollView>
            <Text style={styles.title}>{foodDetailsArray[0 + (foodDetailsArray.length-1)]}</Text>
            <View style={styles.catPrice}>
                <Text style={styles.infoItem}>Course: {categoryFull}</Text>
                <Text style={styles.infoItem}>{priceFull} </Text>
            </View>
            <Image
                style={styles.image}
                source={{
                uri: urlFull
                }}
            />
            <Text style={styles.content}>{contentFull}</Text>
            <Button title='Add to cart'></Button>
        </ScrollView>
    );
}




const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  details: {
    borderWidth: 1,
    padding: 16,
    margin: 8,
  },
  filmPoster: {
    width: '100%',
    height: 450
  },
  release: {
    fontStyle: 'italic',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'right',
  },
  title: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 50,
    fontWeight: 'bold',
  },
  catPrice: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  infoItem: {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 40,
    alignSelf: 'center',
  },
  content: {
    width: 300,
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
});
export default FoodDetails;