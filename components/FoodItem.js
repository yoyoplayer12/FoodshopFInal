import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// content.match[3] = image ==> gaat maar tot 4


const FoodItem = props => {
  const navigation = useNavigation(); 
  //fixing img url
  let urlWithClutter = props.content
  let startUrl = urlWithClutter.indexOf("http");
  let endurl = urlWithClutter.indexOf(".jpg")
  let urlFull = urlWithClutter.substring(startUrl, endurl+4)
  //end fixing img url
  //fixing price
  let priceWithClutter = props.content;
  let startPrice = priceWithClutter.lastIndexOf("<br>");
  let endPrice = priceWithClutter.lastIndexOf("</p>");
  let priceFull = priceWithClutter.substring(startPrice+21, endPrice);
  //end fixing price
  const [itemCounters,setItemCounters] = useState([]);

  return(
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectFood(props.id)}>
      <View style={styles.post}>
          <Text style={styles.title}>{props.title}</Text>

          
          <Image
            style={styles.image}
            source={{
              uri: urlFull
            }}
          />
          <View style={styles.catPrice}>
            <Text style={styles.infoItem}>Price: {priceFull}</Text>
          </View>
          <Button style={styles.buybutton} title='Add to cart' onPress={() => setItemCounters([...itemCounters,props.title])} />
          <View style={styles.counterGroup}>
              <Text style={styles.counterText}>{itemCounters.length}</Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}





const styles = StyleSheet.create({
    title: {
      fontSize: 45,
      fontWeight: 'bold',
      marginLeft: '5%',
      marginTop: 20,
      marginBottom: 20,
      alignSelf: 'center',
    },
    post: {
      backgroundColor: "#f7c29c",
      borderBottomColor: "white",
      borderBottomWidth: 5,
      justifyContent: "center",
    },
    image: {
      width: 300,
      height: 300,
      overflow: "hidden",
      borderRadius: 10,
      marginBottom: 20,
      alignSelf: 'center',
    },
    counterGroup: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    counterText: {
      alignSelf: 'center',
      color:  'rgb(0,122,255)',
      marginBottom: 20,
      backgroundColor: '#f7dbc6',
      padding: 10,
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      overflow:'hidden',
      textAlign: 'center',
    },
    catPrice: {
      flexDirection: 'column',
      alignSelf: 'left',
      marginLeft: 25,
      marginTop: 10,
      marginBottom: 10,
    },
    infoItem: {
      marginLeft: 40,
      marginRight: 40,
      fontSize: 18,
    },
  });
export default FoodItem;