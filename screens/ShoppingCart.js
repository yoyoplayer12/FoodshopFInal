import { StyleSheet, View, Button, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

const ShoppingCart = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.empty}>Your cart is empty right now</Text>
      <Button title='Shop now!' onPress={() => navigation.navigate('FoodShop')}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7c29c',
    justifyContent: 'center',
  },
  empty: {
    alignSelf: 'center',
    fontSize: 30,
  }
});
export default ShoppingCart;
