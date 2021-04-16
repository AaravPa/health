import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CalorieScreen from "../screens/calories";
import ExerciseScreen from "../screens/exercise";
import HydrationScreen from "../screens/hydration";
import SleepScreen from "../screens/sleep";

export const AppTabNavigator = createBottomTabNavigator({
  Calorie : {
    screen: CalorieScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../healthyfood.webp")} style={{width:33, height:33}}/>,
      tabBarLabel : "Calories",
    }
  },
  Exercise : {
    screen: ExerciseScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../exercise.png")} style={{width:40, height:40}}/>,
      tabBarLabel : "Exercise",
    }
  },
  Hydration : {
    screen: HydrationScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../water.png")} style={{width:30, height:30}}/>,
      tabBarLabel : "Hydration",
    }
  },
  Sleep : {
    screen: SleepScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../sleep.jpg")} style={{width:30, height:30}}/>,
      tabBarLabel : "Sleep",
    }
  },
});
