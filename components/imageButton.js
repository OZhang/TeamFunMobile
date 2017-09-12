import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

class ImageButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight
                style = {this.props.style}
                onPress = {this.props.onPress} >
                <Image style={this.props.imageStyle} source={this.props.imageSource}></Image>
            </TouchableHighlight>
        );
    }
}

module.exports = ImageButton;