import React, { Component } from 'react';
import { Text, View, Dimensions, Keyboard, StatusBar } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class WelcomeScreen extends Component {
  constructor(props) {
  super(props);
  this.state = {
    searchString: "",
  };
}





  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.screen}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        {/* <StatusBar hidden={true} /> */}

        <View style={styles.upperScreen}>
          <Text style={styles.text}>THINK ABOUT IT</Text>
          {/* <Text style={styles.text}>and press the button</Text> */}
        </View>
        <View style={styles.midScreen}>
          {/* <Text style={styles.text}>OR write it down</Text> */}
          <FormLabel>OR write it down</FormLabel>
          <FormInput
            onChangeText={searchString => this.setState({ searchString })}
            value={this.state.searchString}
            placeholder="Should I ..."
          />
        </View>
        <View style={styles.bottomScreen}>
          <Button
            title="DECISION"
            raised
            large
            //borderRadius= {20}
            buttonStyle={styles.button}
            onPress={() => {
              this.state.searchString === "" ? navigate("decision") : navigate("result");
              Keyboard.dismiss();
            }}
          />
        </View>
        <View style={styles.spaceScreen}></View>
      </View>
    );
  }
}


const styles = {
  screen: {
    flex: 1,
    //justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'yellow'

  },
  upperScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 0.8 * SCREEN_WIDTH,
    //backgroundColor: 'red',
  },
  midScreen: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-end',
    width: 0.8 * SCREEN_WIDTH,
    //backgroundColor: 'green',
  },
  bottomScreen: {
    flex: 1,
    justifyContent: 'flex-start',

    //backgroundColor: 'blue',
    alignItems: 'center',
    width: 0.8 * SCREEN_WIDTH
  },
  spaceScreen: {
    flex: 1,
    //backgroundColor: 'black',
    width: 0.8 * SCREEN_WIDTH,

  },
  text: {
    fontSize: 30,
  },
  button: {
    backgroundColor: '#0288D1',
    width: 0.7 * SCREEN_WIDTH
  }
};

export default WelcomeScreen;
