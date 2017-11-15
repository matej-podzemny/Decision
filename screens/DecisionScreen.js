import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Deck from '../src/Deck';
import Reward from '../src/Reward';
import {connect} from 'react-redux';
import BackgroundImage from '../src/BackgroundImage';
import styles from '../src/Styles';


const DATA = [
  { id: 1, Q: 'Question #1', coreQ: 'Friendship', img: require('../src/img/friendship.jpg') },
  { id: 2, Q: 'Question #2', coreQ: 'Travel', img: require('../src/img/travel.jpg') },
  { id: 3, Q: 'Question #3', coreQ: 'Cash', img: require('../src/img/cash.jpg') },
  // { id: 4, Q: 'Question #4', coreQ: 'Love', img: require('./img/love.jpg') },
  // { id: 5, Q: 'Question #5', coreQ: 'Self Education', img: require('./img/selfedu.jpg') },
  // { id: 6, Q: 'Question #6', coreQ: 'Health', img: require('./img/health.jpg') },


  // { id: 7, Q: 'Question #7', coreQ: 'Health' , uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  // { id: 8, Q: 'Question #8', coreQ: , uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  // { id: 9, Q: 'Question #8', coreQ: , uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  // { id: 10, Q: 'Question #8', coreQ: , uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];



class DecisionScreen extends Component {

  renderCard(item) {
    return (
    <Card key={item.id} containerStyle={styles.cardStyle}>
      <BackgroundImage image={item.img} style={styles.backgroundImage}>
        <View style={styles.transparent}>
          <Text style={styles.text}>
            {item.coreQ}
          </Text>
        </View>
      </BackgroundImage>
    </Card>);
  }

  render() {


    if (this.props.show) {
      return (
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.text}>
            RELATIVE WITH
          </Text>
        </View>
        <View style={styles.deckScreen}>
          <Deck data={DATA} renderCard={this.renderCard}/>
        </View>
      </View>);
    } else {
      return (
      <View style={styles.container}>
        <Reward/>
      </View>);
    }
  }
}

const mapStateToProps = ({deck}) => {
  const {show} = deck;

  return {show};
};

export default connect(mapStateToProps)(DecisionScreen);
