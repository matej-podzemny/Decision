import React, { Component } from 'react';
import { Text, View, Dimensions, Keyboard, StatusBar } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import styles from '../src/Styles';
import { showDeck } from '../actions';
import { connect } from 'react-redux';




class WelcomeScreen extends Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.screen}>
          <Text style={styles.text}>THINK ABOUT IT</Text>
        </View>
        {/* <View style={styles.styles.styles.midScreen}> */}
          {/* <Text style={styles.styles.styles.text}>OR write it down</Text> */}
          {/* <FormLabel>OR write it down</FormLabel> */}
          {/* <FormInput */}
            {/* onChangeText={searchString => this.setState({ searchString })} */}
            {/* value={this.state.searchString} */}
            {/* placeholder="Should I ..." */}
          {/* /> */}
        {/* </View> */}
        <View style={styles.screen}>
          <Button
            title="DECISION"
            raised
            large
            color="black"
            fontSize={20}
            borderRadius={20}
            buttonStyle={styles.button}
            onPress={() => {
              this.props.showDeck(true);
              navigate("decision");
              Keyboard.dismiss();
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({counter}) => {
  const {points} = counter;

  return {points};
};

export default connect(mapStateToProps, {
  showDeck,
})(WelcomeScreen);
