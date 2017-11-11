import React, { Component } from 'react';
import { Text, View, Dimensions, Keyboard, StatusBar } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const fontAutoSize = SCREEN_WIDTH * 0.1;
const fontAutoSizeSmall = SCREEN_WIDTH * 0.05;


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
        {/* <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        /> */}
        <StatusBar hidden={true} />

        <View style={styles.upperScreen}>
          <Text style={styles.text}>THINK ABOUT IT</Text>
          {/* <Text style={styles.text}>and press the button</Text> */}
        </View>
        {/* <View style={styles.midScreen}> */}
          {/* <Text style={styles.text}>OR write it down</Text> */}
          {/* <FormLabel>OR write it down</FormLabel> */}
          {/* <FormInput */}
            {/* onChangeText={searchString => this.setState({ searchString })} */}
            {/* value={this.state.searchString} */}
            {/* placeholder="Should I ..." */}
          {/* /> */}
        {/* </View> */}
        <View style={styles.bottomScreen}>
          <Button
            title="DECISION"
            raised
            large
            color="black"
            fontSize={fontAutoSizeSmall}
            //borderRadius="20"
            borderRadius={20}
            buttonStyle={styles.button}
            onPress={() => {
              this.state.searchString === "" ? navigate("decision") : navigate("result");
              Keyboard.dismiss();
            }}
          />
        </View>
        {/* <View style={styles.spaceScreen}></View> */}
      </View>
    );
  }
}


const styles = {
  screen: {
    flex: 1,
    //justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#093145'

  },
  upperScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',

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
    fontWeight: 'bold',
    fontSize: fontAutoSize,
    color: 'white'
  },
  button: {
    borderWidth: 0,
    backgroundColor: 'rgba(233,204,87,1)',
    width: 0.7 * SCREEN_WIDTH,
    borderRadius: 20,
  }
};

export default WelcomeScreen;
