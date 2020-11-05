import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen  from "./screens/RegisterScreen";
import HomeScreen from './screens/HomeScreen';


const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};
const screenForFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress
  }
});
const headerForFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0]
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity }
  };
};
const MyTransition = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: config,
    close: config
  },
  cardStyleInterpolator: screenForFade,
  headerStyleInterpolator: headerForFade
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTintColor: "#003399",
  headerBackTitle: "Back"
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff"
          },
          headerTintColor: "#FF7F36",
          headerBackTitle: "Back",
          headerTitleStyle: {
            fontWeight: "normal"
          },
          gestureEnabled: true,
          ...MyTransition
        }}
      >
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: true }}
          />
        <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MainStackNavigator;