import { StyleSheet, View, Button, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

const SortScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={{alignSelf: "center",marginBottom: 20, marginTop: 20,fontSize: 20,}}>Sorting doesn't work yet</Text>
      <Button title='Alphabetical (A-Z)' onPress={() => navigation.navigate('FoodShop')}/>
      <Button title='Alphabetical (Z-A)' onPress={() => navigation.navigate('FoodShop')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7c29c',
  },
});

export default SortScreen;
