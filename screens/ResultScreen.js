import React, { Component } from 'react';
import { Text, View, Animated, Dimensions, UIManager, LayoutAnimation } from 'react-native';
import { Button } from 'react-native-elements';


const DURATION = 2500;
const SCREEN_WIDTH = Dimensions.get('window').width;


class ResultScreen extends Component {

  componentWillUpdate() {
    UIManager.setLayoutAnimationsEnabledExperimental && UIManager.LayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  renderReward() {

  }

  render() {
    return (
      <Animated.View>
        {/* {this.renderReward()} */}
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
        <Text>HOvnoooo</Text>
      </Animated.View>
    );
  }
  // render() {
  //
  //   const { navigate } = this.props.navigation;
  //
  //   return (
  //     // <Animated.View style={this.position.getLayout()}>
  //     //   <View style={styles.ball} />
  //     // </Animated.View>
  //     <View style={{ flex: 1 }}>
  //       <View>
  //
  //       </View>
  //       <Button
  //         title="Again"
  //         raised
  //         large
  //         //borderRadius= {20}
  //         buttonStyle={styles.button}
  //         onPress={() => {
  //           navigate("welcome");
  //
  //         }}
  //       />
  //     </View>
  //   );
  // }
}

const styles ={
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  },
  button: {
    backgroundColor: '#0288D1',
    width: 0.7 * SCREEN_WIDTH
  }
};

export default ResultScreen;
