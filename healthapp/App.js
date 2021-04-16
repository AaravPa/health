import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from "./screens/loginScreen";
import HomeScreen from "./screens/homeScreen";
import QuestionScreen from "./screens/questionScreen";
import { AppTabNavigator } from "./components/AppTabNavigator"
import { createAppContainer, createSwitchNavigator } from "react-navigation";
export default class App extends React.Component {
  render() {
    return(
        <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  QuestionScreen:{screen: QuestionScreen},
  TabNavigator:{ screen: AppTabNavigator }
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
