import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity,Dimensions} from "react-native";
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Ac from "../reducers/actions.js";
import {Actions} from "react-native-router-flux";
function mapStateToProps(state){
  return {DATA:state.data}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class Between extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
      </View>
    );
  }
  componentWillMount(){
    Actions.cart();
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Between);
