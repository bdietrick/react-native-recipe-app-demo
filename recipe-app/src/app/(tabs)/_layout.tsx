import React from "react";
import {Tabs} from "expo-router"
import {StyleSheet} from "react-native"
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  headerRight:{
    marginRight: 20
  }
});

export default function RootLayout() {

    return (
    <React.Fragment>

      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: 'brown'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
          tabBarLabelPosition: 'below-icon',
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          headerRight: () => (
               <MaterialCommunityIcons 
                name="airplane" 
                size={24} 
                color="black"
                style={styles.headerRight} />           
          )
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <MaterialCommunityIcons 
                name="home" 
                size={24} 
                color="black" />
            )
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarLabel: "Favorites",
            tabBarIcon: () => (
              <MaterialCommunityIcons 
                name="heart" 
                size={24} 
                color="black" />
            )
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarLabel: "Settings",
            tabBarIcon: () => (
              <MaterialCommunityIcons 
                name="cog" 
                size={24} 
                color="black" />
            )
          }}
        />

      </Tabs>

    </React.Fragment>
    );
}