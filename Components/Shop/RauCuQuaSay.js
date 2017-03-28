import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,TouchableOpacity,
  ListView
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Ac from "../reducers/actions.js";
import {Actions} from "react-native-router-flux";
var {height, width} = Dimensions.get('window');
import {firebaseApp} from "../Config/FirebaseConfig.js";
function mapStateToProps(state){
  return {DATA:state.data}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class RauCuQuaSay extends Component{
  render(){
      return(
        <View style={{flex:1,paddingTop:60,justifyContent:"center",alignItems:"center",backgroundColor:"#ddd"}}>
          <View style={{backgroundColor:"#FFF",padding:20,marginBottom:30}}>
            <Text>
              Chưa Có Sản Phẩm !!!
            </Text>
          </View>
        </View>
      );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RauCuQuaSay);
