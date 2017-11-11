import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { fontAutoSize, HelperStyles } from './Helper.js';




class Reward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumb: null,
      text: "",
      color: "",
    };
  }

  componentWillMount() {
    if (this.props.doit) {
      console.log("Dostale jsem to")
      this.setState({
        thumb: (<Icon name="like" color="#fff" size={40} />),
        text: "Do it.",
        color: ({ backgroundColor: 'green' })
      })
    } else {
      console.log("nic jsem nedostal")
      this.setState({
        thumb: (<Icon name="dislike" color="#fff" size={40} />),
        text: "Don't",
        color: ({ backgroundColor: 'red' })
      })
    }
  }


  // componentWillMount() {
  //   if (this.props.doit) {
  //     return Icon.getImageSource('like', 40, 'black').bind(this).then((source) => this.setState({ thumb: source }));
  //     //const icon = {likeIcon}
  //   } else {
  //     return Icon.getImageSource('dislike', 40, 'black').bind(this).then((source) => this.setState({ thumb: source }));
  //     //const icon = {dislikeIcon}
  //   }
  // }

  renderReward() {

    return (
      <View style={HelperStyles.container}>
        <View style={styles.header}>
          <Avatar
            xlarge
            rounded
            overlayContainerStyle={this.state.color}
            title={this.state.thumb}
            //onPress={() => console.log("Works!")}
            onPress={() => {
              console.log("this.props.doit="+this.props.doit+", this.state.thumb="+this.state.thumb);
                   this.setState({ thumb: {likeIcon} });
                 }
              }
            activeOpacity={0.7}
          />
        </View>
        <View style={styles.footer}>
          <Text style={HelperStyles.text}>{this.state.text}</Text>
          {/* <Text style={{ fontSize: 16, italic: true, color: "white", marginTop: 15 }}></Text> */}
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderReward()}
      </View>
    );
  }
}

const styles ={
  text: {
    fontSize: fontAutoSize
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

};

export default Reward;
