import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager
} from 'react-native';
import {connect} from 'react-redux';
import {onIncrement, onDecrement, doOrDoNot} from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * Dimensions.get('window').width;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {
  static defaultProps ={
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props) {
    super(props);
    // const color = new Animated.value();
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,//touchng this?
      onPanResponderMove: (event, gesture) => {
        //Called when user tap and drag object
        //gesture has all the info.
        //debugger;
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },//object is moving
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }//let go
    });

    this.state = {
      panResponder,
      position,
      index: 0,
      finished: false,
      numberHolder: 1,
     };
  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 })
    }
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationsEnabledExperimental && UIManager.LayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }



  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
    Animated.timing(this.state.position, {
      toValue: { x: x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index]

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
    direction === 'right' ? this.props.onIncrement(this.props.points) : this.props.onDecrement(this.props.points);

    const kokot = this.props.points + 1;

    console.log("ID: " + this.state.index);
    console.log("Direction: " + direction);
    console.log("kredity ve state: "+this.props.points);
    console.log("zkouska: "+kokot);


  }


  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });


    return {
      ...position.getLayout(),
      //transform: [{ rotate: rotate }]
      // | ES6  |
      // V edit V
      transform: [{ rotate }]
    };
  }



  renderCards() {

    // if (this.state.numberHolder > 3 && this.state.index >= this.props.data.length) {
    //   return this.props.renderDo();
    // }
    //
    // if (this.state.numberHolder < 2 && this.state.index >= this.props.data.length) {
    //   return this.props.renderNot();
    // }

    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards(this.props.points);
      return this.props.doOrDoNot(this.props.points);
    }

    return this.props.data.map((item, i) => {
      if (i < this.state.index) { return null; }

      if (i === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style={[this.getCardStyle(), styles.cardStyle, { width: SCREEN_WIDTH }]}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return (
      <Animated.View
        key={item.id}
        style={[styles.cardStyle, {
          top: 10 * (i - this.state.index),
          right: 8 * (i - this.state.index),
          left: 8 * (i - this.state.index),
        }]}
        >
          {this.props.renderCard(item)}
      </Animated.View>
      );
    }).reverse();
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    //width: SCREEN_WIDTH
    //width or left:0, right:0
  }
};

const mapStateToProps = ({counter}) => {
  const {points} = counter;

  return {points};
};

export default connect(mapStateToProps, {
  onIncrement,
  onDecrement,
  doOrDoNot,
})(Deck);
