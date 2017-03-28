import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image
} from "react-native";
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as Ac from "../reducers/actions.js";
import Icon from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');
//////////////////////////////////
import Swiper from 'react-native-swiper';
const loading = require('../image/loading.gif');
const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 60,
    height: 60
  }
};
const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>);
}
//////////////////////////////////
function mapStateToProps(state){
  return {DATA:state.data}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class Search extends Component{


  render(){
    return(
      <View style={{backgroundColor:"#FFF",flex:1,paddingTop:65}}>
        <View style={{alignItems:"center"}}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:width-20,borderRadius:5, borderColor: '#0D47A1', borderWidth: 1,marginTop:5}}>
            <Icon name='search' size={30} style={{backgroundColor:"transparent",color:'#0D47A1',marginLeft:10}} />
            <TextInput style={{
              width:width-50,
              flexDirection:"row",
              height:45,
              paddingLeft:5,
              marginTop:5,
              color:"#0D47A1"
            }}/>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);
