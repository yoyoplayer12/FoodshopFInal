// import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import apiKey from '../apiKey';


const Post = "https://yorickdv.be/wp-json/wp/v2/posts/"




const FoodItem = ({ title, content }) => {
    return(
        <View style={styles.post}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 35,
      fontWeight: 'bold',
    },
    post: {
      borderWidth: 1,
      borderColor: "black",
      marginTop: 10,
      paddingLeft: 20
    }
  });
export default FoodItem;