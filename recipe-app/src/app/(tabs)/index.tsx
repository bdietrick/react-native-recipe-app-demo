import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecipeList from '../../components/RecipeList';

const recipes = [
  { name: 'Banana Pancakes', ingredients: ['flour', 'milk', 'egg'] , instructions:['Mix ingredients', 'Cook on skillet']},
  { name: 'Tomato Soup', ingredients: ['tomatoes', 'onion', 'garlic'], instructions: ['Chop vegetables', 'Simmer in pot'] }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <RecipeList recipes={recipes} />
      <StatusBar style="auto" />
    </View>
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
