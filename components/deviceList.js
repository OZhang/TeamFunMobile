import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ListView
} from 'react-native';

import ImageButton from './imageButton'
  
class DeviceList extends Component {
    constructor(props) {
        super(props);

         ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
         });

        this.state = {
            dataSource: ds.cloneWithRows(['A','B','C']),
            //refresh: (data)=>{
            //    dataSource = data;
            //}
        }
    }

    renderRow(rowData){
        return(
            //<Text style={{color: 'black', backgroundColor:'#fff', alignSelf:'center'}}>
            //    {rowData}
            //</Text>
            <View style={{flexDirection: 'row', padding: 10, alignItems: 'center', borderColor: '#D7D7D7', borderBottomWidth: 1}}>
                <Image source={require('../img/item.png')} style={{height:36, width:36}}>
                </Image>
                <View style={{paddingLeft: 20}}>
                    <Text style={{backgroundColor: '#fff'}}>
                        {rowData}
                    </Text>
                    <Text style={{backgroundColor: '#fff'}}>
                        {rowData}
                    </Text>
                </View>
            </View>
        );
    }

    render(){
        return (
            <View style={{justifyContent: 'flex-start'}}>
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}           
                >
                </ListView>
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

module.exports = DeviceList;