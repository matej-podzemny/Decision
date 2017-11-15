import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Button, Avatar} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../src/Styles';
import {connect} from 'react-redux';

class Reward extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     thumb: null,
  //     text: "",
  //     color: "",
  //   };
  //}




  componentWillMount() {

    if (this.props.thumbsUp) {
      console.log("this.props.thumbsUP funguje");
    } else {
      console.log("this.props.thumbsUP nefunguje");
    }
  }



  renderReward() {
    return (
      <View style={styles.screen}>
        <Text>Jooooooooo</Text>
        <Text>Jooooooooo</Text>
        <Text>Jooooooooo</Text>
        <Text>Jooooooooo</Text>
        <Text>Jooooooooo</Text>
        <Text>Jooooooooo</Text>
        <Text>Jooooooooo</Text>
        <Text>Jooooooooo</Text>
        <Text>Jooooooooo</Text>
      </View>
    );
  }



  render() {
    return (
    <View style={styles.container}>
      {this.renderReward()}
    </View>);
  }
}



const mapStateToProps = ({decision}) => {
  const {thumbsUP, text} = decision;

  return {thumbsUP, text};
};

export default connect(mapStateToProps)(Reward);
