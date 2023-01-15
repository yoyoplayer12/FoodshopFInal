import { StatusBar } from 'expo-status-bar';                                          //notification bar
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';                                //standard react stuff
import { NavigationContainer } from '@react-navigation/native';                       //navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';          //navigation

import FoodScreen from './screens/FoodScreen.js';
import DetailScreen from './screens/DetailScreen.js';
import SortScreen from './screens/SortScreen.js';
// import ShoppingBasketScreen from './screens/ShoppingbasketScreen.js';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FoodShop" component={FoodScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Sort" component={SortScreen} />
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