import React from 'react';
import { Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import DecisionScreen from './screens/DecisionScreen';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      decision: { screen: DecisionScreen },
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
