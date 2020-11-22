import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "styles/theme";

import { MovieListScreen } from "screens/MovieListScreen";
import { ThemeProvider } from "styled-components/native";

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName = "md-home";

              if (route.name === "Movies List") {
                iconName = "md-film";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Movies List" component={MovieListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
