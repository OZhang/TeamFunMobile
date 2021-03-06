import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  FlatList,
  ListView
} from 'react-native';

import ImageButton from './imageButton'
import DeviceList from './deviceList'

const onButtonPress = () => {
    //Alert.alert('Button has been pressed!')
    //React.findDOMNode(this.refs.Te).focus();
    //Alert.alert(document.activeElement.tagName);
};
  
class DeviceTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 't'
        }
    }

    onAddBtnPress(){
        Alert.alert(this.state.message);
    }

    render(){
        return (
            <View>
                <View style={{height:40,backgroundColor:'#333333', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:18,width:200, backgroundColor:'transparent',marginLeft:5}}>Mobile Detector</Text>
                    <ImageButton 
                        style={{backgroundColor:'transparent', marginRight:-80}} 
                        onPress={this.onAddBtnPress.bind(this)} 
                        imageStyle={{width:25, height:25}} 
                        imageSource={require('../img/refresh.png')}>
                    </ImageButton>  
                    <ImageButton 
                        style={{backgroundColor:'transparent', marginRight:10}} 
                        onPress={this.onAddBtnPress.bind(this)} 
                        imageStyle={{width:25, height:25}} 
                        imageSource={require('../img/searchAdd.png')}>
                    </ImageButton>  
                </View>
                <View>
                    <DeviceList itemSource={['a','b','c']}>

                    </DeviceList>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    header:{
        height: 80,
        backgroundColor: 'black'
    },
    searchBtn: {
        justifyContent: 'flex-end'
    },
    pageTitle: {
    }
});

module.exports = DeviceTab;