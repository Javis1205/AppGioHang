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
import {firebaseApp}  from "../Config/FirebaseConfig.js";

function mapStateToProps(state){
  return {DATA:state.data}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class Shop extends Component{
  render(){
    return(
      <View style={{flex:1,alignItems:"center",marginTop:60,backgroundColor:"#ddd",paddingTop:10}}>
        <View style={{flexDirection:"row",marginTop:15}}>
          <TouchableOpacity
            style={{justifyContent:"center",
            alignItems:"center",
            padding:20,width:width/2-30,
            height:(width/2-30)*2/3,
            marginRight:20}}
            onPress={()=>{Actions.dacsan()}}
            >
            <Image source={require('../image/dacsanvietnam.jpeg')} style={{width:width/2-30,height:(width/2-30)*2/3,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:18,color:"#FFF",backgroundColor:"#ee2211",opacity:0.7,padding:5,width:width/2-30}}>
                Đặc Sản Việt Nam
              </Text>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity
          style={{justifyContent:"center",
          alignItems:"center",
          padding:20,
          width:width/2-30,
          height:(width/2-30)*2/3}}
          onPress={()=>{Actions.hangnhap()}}
          >
            <Image source={require('../image/hangxachtaynhat.jpg')} style={{width:width/2-30,height:(width/2-30)*2/3,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:18,color:"#FFF",backgroundColor:"#ee2211",opacity:0.8,padding:5,width:width/2-30}}>
                Hàng Nhập Khẩu
              </Text>
            </Image>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",marginTop:15}}>
          <TouchableOpacity
          style={{justifyContent:"center",
          alignItems:"center",
          padding:20,
          width:width/2-30,
          height:(width/2-30)*2/3,
          marginRight:20}}
          onPress={()=>{Actions.mypham()}}
          >
            <Image source={require('../image/myphamthiennhien.jpg')} style={{width:width/2-30,height:(width/2-30)*2/3,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:14,color:"#FFF",backgroundColor:"#ee2211",opacity:0.7,padding:5,width:width/2-30}}>
                Mỹ Phẩm Thiên Nhiên
              </Text>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity
          style={{justifyContent:"center",
          alignItems:"center",
          padding:20,
          width:width/2-30,
          height:(width/2-30)*2/3}}
          onPress={()=>{Actions.raucu()}}
          >
            <Image source={require('../image/raucuquasay.jpg')} style={{width:width/2-30,height:(width/2-30)*2/3,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:18,color:"#FFF",backgroundColor:"#ee2211",opacity:0.8,padding:5,width:width/2-30}}>
              Rau củ quả sấy
              </Text>
            </Image>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",marginTop:15}}>
          <TouchableOpacity
          style={{justifyContent:"center",
          alignItems:"center",
          padding:20,
          width:width/2-30,
          height:(width/2-30)*2/3,
          marginRight:20}}
          onPress={()=>{Actions.trava()}}
          >
            <Image source={require('../image/travacafe.jpg')} style={{width:width/2-30,height:(width/2-30)*2/3,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:18,color:"#FFF",backgroundColor:"#ee2211",opacity:0.7,padding:5,width:width/2-30}}>
              Trà và Cà phê
              </Text>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity
          style={{justifyContent:"center",
          alignItems:"center",
          padding:20,
          width:width/2-30,
          height:(width/2-30)*2/3}}
          onPress={()=>{Actions.hatdinh()}}
          >
            <Image source={require('../image/hatdinhduong.jpeg')} style={{width:width/2-30,height:(width/2-30)*2/3,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:18,color:"#FFF",backgroundColor:"#ee2211",opacity:0.8,padding:5,width:width/2-30}}>
              Hạt Dinh Dưỡng
              </Text>
            </Image>
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop);
