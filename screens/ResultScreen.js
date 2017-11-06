import React, { Component } from 'react';
import { Text, View, Animated } from 'react-native';

const DURATION = 2500;

class ResultScreen extends Component {
  componentWillMount () {
    this.position = new Animated.ValueXY(0, 0);
    Animated.timing(this.position, {
      toValue: { x: 200, y: 500 },
      duration: DURATION
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles ={
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
};

export default ResultScreen;
