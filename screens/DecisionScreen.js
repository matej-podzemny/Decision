import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from '../src/Deck';
import Reward from '../src/Reward';
import {connect} from 'react-redux';
import { doOrDoNot } from '../actions';


const SCREEN_WIDTH = Dimensions.get('window').width;
export const fontAutoSize = SCREEN_WIDTH * 0.1;

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
            <Image source={this.props.image} style={styles.backgroundImage}>
                  {this.props.children}
            </Image>
        )
    }
}

class DecisionScreen extends Component {
  constructor(props) {
  super(props);
  this.state = {
    finished: false,
  };

}

  renderCard(item) {
    return (
      <Card
        key={item.id}
        containerStyle={styles.cardStyle}
      >
          <BackgroundImage
            image={item.img}
          >
            <View style={{
              flex:1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              //height: 150,
            }}>
              <Text style={[styles.text, { color: 'white' }]}>
                {item.coreQ}
              </Text>
            </View>
          </BackgroundImage>
      </Card>

    );
  }




  renderNoMoreCards(points) {
    //console.log("pocet bodiku?"+points);
    this.setState({ finished: true });
    //this.props.doOrDoNot(points);
    //console.log("dosly karty..");
    return (null);
  }



  render() {


    const { navigate } = this.props.navigation;

  //   If (fini=true) {
  //    return reward
  //    } else {
  //      return else
  //    }

    if (this.state.finished) {
      return (
        <View style={{ flex: 1 }}>
          <Reward
            doit
          />
        </View>
      );
    } else {
      return (


      <View style={styles.container}>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text style={[styles.text, { color: 'white' }]}>
            RELATIVE WITH
          </Text>
          {/* <Button
            title="DECISION"
            raised
            large
            //borderRadius= {20}
            buttonStyle={styles.button}
            // onPress={() => {
            //   navigate("result");
            // }}
            onPress={this.renderNoMoreCards}
          /> */}
        </View>
        <View style={{ flex: 1 }}>
          <Deck
            data={DATA}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards.bind(this)}



            // renderNoMoreCards={() => {
            //   navigate("result");
            // }}
          />
        </View>
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgba(101,210,237,1)'
    //backgroundColor: 'rgba(110,230,253,1)'

    backgroundColor: '#093145'


    //marginTop: '35%',
  },
  button: {
    backgroundColor: '#0288D1',
    width: 0.7 * SCREEN_WIDTH
  },
  text: {
    fontWeight: 'bold',
    //color: 'white',
    //backgroundColor: 'rgba(0,0,0,0)',
    fontSize: fontAutoSize,
    //backgroundColor: 'rgba(0, 0, 0, 0.4)'
},
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 35,
    height: 250,
  //  opacity: 0.2,
  //  backgroundColor: 'rgba(255, 0, 0, 0.8)'
},
//   canvas: {
//    position: 'relative',
//   //  top: -15,
//   //  left: -15,
//   // bottom: 0,
//   // right: -30,
//   //flex:1,
//   width: null,
//   height: null,
// },
  cardStyle: {
    //height: 120,
    borderBottomWidth: 0,
    borderWidth: 0,
    //backgroundColor: '#093145',
    //borderColor: '#093145',
    //borderColor: 'white',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderRadius: 40,
    //opacity: 0.9
  },
});

const mapStateToProps = ({decision}) => {
  const {doit, points} = decision;

  return {doit, points};
};

export default connect(mapStateToProps, {
  doOrDoNot,
})(DecisionScreen);
