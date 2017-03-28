import React, { Component } from 'react';
import {
  View,
  Text
} from "react-native";
import {Actions} from 'react-native-router-flux';

export default class Menu extends Component {
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:"red"}}>
        <Text onPress={()=>{Actions.refresh({key: 'drawer', open: value => !value });}}>
          MEnu
        </Text>
      </View>
    );
  }
}
