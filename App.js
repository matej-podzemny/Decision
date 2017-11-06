import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import DecisionScreen from './screens/DecisionScreen';
import ResultScreen from './screens/ResultScreen';


export default class App extends React.Component {
  render() {

    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      decision: { screen: DecisionScreen },
      result: { screen: ResultScreen },
    });

    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({

});
