import React from 'react'
import {View, Text, StyleSheet, ViewStyle, Pressable} from 'react-native'

type Recipe = {
    name: string
    ingredients?: string[]
    instructions?: string[]
}

type Props = {
    recipe: Recipe
    onPress?: () => void
    style?: ViewStyle
}



export default function RecipeCard({recipe, onPress, style}:Props) {

    return(
        <View style={[styles.card, style]}>
            <Pressable 
                onPress={onPress}
                style={({pressed}) => [styles.pressable, pressed && styles.pressed]}
            >
            <View style={styles.content}>
                <View style={styles.textBlock}>
                    <Text style={styles.title}>
                        {recipe.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {(recipe.ingredients?.length ?? 0) + ' ingredients'}
                    </Text>
                </View>
                <Text style={styles.icon}>
                    {'>'}
                </Text>
            </View>
            </Pressable>
        </View>
    )

}


const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    // Android elevation
    elevation: 2,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 1.5,
  },
  pressable: {
    borderRadius: 8,
  },
  pressed: {
    opacity: 1,
  },
  content: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBlock: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
  icon: {
    marginLeft: 12,
    color: '#888',
    fontSize: 20,
  },
})