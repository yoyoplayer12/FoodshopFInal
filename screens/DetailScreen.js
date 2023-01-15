import { StyleSheet, Text, View, VirtualizedList, SafeAreaView } from 'react-native';





const FoodScreen = navigation =>{
    return (
        <View style={styles.screen}>
          <MovieDetails movieId={movieId} />
          <Button
            title="Go to Movies"
            onPress={() => navigation.navigate('Movies')}
          />
        </View>
      );
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
    }
  });
  
export default DetailScreen;