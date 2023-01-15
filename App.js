import { StatusBar } from 'expo-status-bar';                                          //notification bar
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';                                //standard react stuff
import { NavigationContainer } from '@react-navigation/native';                       //navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';          //navigation
import { useNavigation } from '@react-navigation/native';

import FoodScreen from './screens/FoodScreen.js';
import DetailScreen from './screens/DetailScreen.js';
import SortScreen from './screens/SortScreen.js';
import ShoppingCart from './screens/ShoppingCart.js';
// import ShoppingBasketScreen from './screens/ShoppingbasketScreen.js';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="FoodShop"
        component={FoodScreen}
        options={(props) => ({
          headerRight: () =>
            <TouchableOpacity
            onPress={() => props.navigation.navigate('Shoppingcart')} style={{ padding: 5, color:"black" }}>
              <Text style={{fontSize: 20}}>Cart</Text>
            </TouchableOpacity>,
          headerLeft: () =>
          <TouchableOpacity
          onPress={() => props.navigation.navigate('Sorting options')} style={{ padding: 5, color:"black" }}>
            <Text style={{fontSize: 20}}>Sort</Text>
          </TouchableOpacity>
        })}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={(props) => ({
            headerRight: () =>
              <TouchableOpacity
              onPress={() => props.navigation.navigate('Shoppingcart')} style={{ padding: 5, color:"black" }}>
                <Text style={{fontSize: 20}}>Cart</Text>
              </TouchableOpacity>
            })}
            />
        <Stack.Screen
          name="Sorting options"
          component={SortScreen}
          options={(props) => ({
            headerRight: () =>
              <TouchableOpacity
              onPress={() => props.navigation.navigate('Shoppingcart')} style={{ padding: 5, color:"black" }}>
                <Text style={{fontSize: 20}}>Cart</Text>
              </TouchableOpacity>
            })}
            />
        <Stack.Screen name="Shoppingcart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






















// code van vorige apps may be interessant






// import MoviesScreen from './screens/MoviesScreen';
// import DetailsScreen from './screens/DetailsScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Movies" component={MoviesScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }