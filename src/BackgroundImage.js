import React, { Component } from 'react';
import { Image } from 'react-native';


export default class BackgroundImage extends Component {

    render(image) {
        return (
            <Image source={this.props.image} style={this.props.style}>
                  {this.props.children}
            </Image>
        )
    }
}
