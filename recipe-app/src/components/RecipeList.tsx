import React from 'react'
import { View, FlatList, ListRenderItemInfo, StyleSheet, ViewStyle } from 'react-native'
import { useRouter } from 'expo-router'
import RecipeCard from './RecipeCard'

type Recipe = {
    name: string
    ingredients?: string[]
    instructions?: string[]
}

type Props = {
    recipes: Recipe[]
    style?: ViewStyle
}

export default function RecipeList({ recipes = [], style }: Props) {
    const router = useRouter()

    const renderItem = ({item,index}: ListRenderItemInfo<Recipe>) =>{

        return (
            <RecipeCard
                recipe={ item  }
                style={styles.item}
                onPress={() => {
                    router.push(`/details?recipeIndex=${index}`)
                }}
            />
        )
    }

    return (
        <View style={[styles.container, style]}>
            <FlatList<Recipe>
                data={recipes}
                keyExtractor={(_,i) => String(i)}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.listContent}
                />
        </View>
    )
    

}


const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  listContent: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  item: {
    marginVertical: 6,
  },
  separator: {
    height: 0,
  },
})