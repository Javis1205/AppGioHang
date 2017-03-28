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
export class SanPham extends Component{
  constructor(props){
    super(props);
    this.state={
      HINH:this.props.HINH,
      NAME:this.props.NAME,
      SOLUONG:this.props.SOLUONG,
      DONGIA:this.props.DONGIA,
    }
  }
  render(){
    return(
      <View style={{marginLeft:10,width:width/3+40,height:width/3+60,padding:10,paddingLeft:5,paddingRight:5,backgroundColor:"#FFF",justifyContent:"center",alignItems:"center"}}>
        <Image source={{uri:this.state.HINH}} style={{width:width/3+20,height:width/3,borderWidth:2,borderColor:"#DDD"}}/>
        <View style={{flexDirection:"row",padding:10}}>
          <Text style={{fontSize:18,marginTop:2}} numberOfLines={1}>
          {this.state.NAME}
          </Text>
          <Text style={{backgroundColor:"#ee2211",padding:3,paddingLeft:5,paddingRight:5,color:"#FFF",marginLeft:5}}>
          {this.state.SOLUONG}
          </Text>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SanPham);
