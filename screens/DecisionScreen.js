import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from '../src/Deck';

const SCREEN_WIDTH = Dimensions.get('window').width;


const DATA = [
  { id: 1, Q: 'Question #1', coreQ: 'Friendship', img: require('../src/img/friendship.jpg') },
  { id: 2, Q: 'Question #2', coreQ: 'Travel', img: require('../src/img/travel.jpg') },
  { id: 3, Q: 'Question #3', coreQ: 'Cash', img: require('../src/img/cash.jpg') },
  { id: 4, Q: 'Question #4', coreQ: 'Love', img: require('../src/img/love.jpg') },
  { id: 5, Q: 'Question #5', coreQ: 'Self Education', img: require('../src/img/selfedu.jpg') },
  { id: 6, Q: 'Question #6', coreQ: 'Health', img: require('../src/img/health.jpg') },
  // { id: 7, Q: 'Question #7', coreQ: 'Health' , uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  // { id: 8, Q: 'Question #8', coreQ: , uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  // { id: 9, Q: 'Question #8', coreQ: , uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  // { id: 10, Q: 'Question #8', coreQ: , uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class BackgroundImage extends Component {

    render(image) {
        return (
            <Image source={this.props.image}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

export default class DecisionScreen extends Component {
  renderCard(item) {
    return (

      <Card
        key={item.id}
        containerStyle={styles.cardStyle}
      >
          <BackgroundImage
            image={item.img}
          >
            <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
              <Text style={styles.text}>
                {item.coreQ}
              </Text>
            </View>
          </BackgroundImage>
      </Card>

    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All done!">
        <Text style={{ marginBottom: 10 }}>
          There is no more content here!
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get more!"
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '35%',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    //backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 40,
},
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 35,
    height: 250,
    opacity: 1,
},
  canvas: {
   position: 'relative',
  //  top: -15,
  //  left: -15,
  // bottom: 0,
  // right: -30,
  //flex:1,
  width: null,
  height: null,
},
  cardStyle: {
    //height: 120,
    borderWidth: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderRadius: 40,
  },
});
