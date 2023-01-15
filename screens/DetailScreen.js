import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import FoodDetails from '../components/FoodDetails';

import {foodInfo} from '../screens/FoodScreen';



const DetailScreen = ({route}) =>{
  const { foodId } = route.params;
    return (
      <View style={styles.screen}>
        <FoodDetails 
        foodId={foodId}
        />
      </View>
      );
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#f7c29c',
    },
  });
  
export default DetailScreen;