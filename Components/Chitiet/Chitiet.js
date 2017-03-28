import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ListView,
  Alert
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Ac from "../reducers/actions.js";
import {Actions} from "react-native-router-flux";
var {height, width} = Dimensions.get('window');
function mapStateToProps(state){
  return {DATA:state.data}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class Chitiet extends Component{
  constructor(props){
    super(props);

  }
  xacthuc(){
    Alert.alert(
      'Xác Nhận',
      'Ban có muốn thêm sản phẩm vào giỏ hàng không ?',
      [
        {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Có', onPress: () => {this.addCart()}},
      ],
      { cancelable: false }
    )
  }
  addCart(){
    let arr = this.props.DATA ;
    let soluong = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].name == this.props.name) {
        soluong+=1;
      }
    }
    if (soluong < this.props.num) {
      let item = {
        name:this.props.name,
        cost:this.props.cost,
        num: this.props.num,
        des: this.props.des,
        image:this.props.image,
        maker:this.props.maker
      };
      this.props.ADDCART({
        ITEM : item
      });
      this.Cart()
    }else {
      Alert.alert('Không đủ sản phẩm')
    }
  }
  Cart(){
    Actions.cart()
  }
  render(){
    return(
      <View style={{flex:1,paddingTop:65,backgroundColor:"#ddd"}}>
        <ScrollView>
          <View style={{backgroundColor:"#fff"}}>
            <Text style={{fontSize:18,backgroundColor:"transparent",padding:10}}>
              {this.props.name}
            </Text>
            <Text style={{fontSize:14,color:"#ee2211",padding:10,paddingTop:0}}>
              {this.props.cost} Đ
            </Text>
            <View style={{flexDirection:"row",padding:10,paddingTop:0}}>
              <Text style={{fontSize:14,color:"#000"}}>
                Số Sản Phẩm Còn :
              </Text>
              <Text style={{fontSize:14,color:"#ee2211",marginLeft:5}}>
                {this.props.num}
              </Text>
              <Text style={{fontSize:14,color:"#000",marginLeft:5}}>
                 sản phẩm
              </Text>
            </View>
            <Image
              source={{uri:this.props.image}}
              style={{width:width,height:height/3}}
            />
          </View>
          <View style={{height:2,backgroundColor:"#999",opacity:0.3}}>
          </View>
          <View style={{height:2,backgroundColor:"#999",opacity:0.2}}>
          </View>
          <View style={{height:2,backgroundColor:"#999",opacity:0.1}}>
          </View>
          <View style={{backgroundColor:"#fff",padding:5}}>
            <Text style={{fontSize:18,padding:10}}>
              Mô tả sản phẩm :
            </Text>
            <Text style={{fontSize:14,padding:10,paddingTop:5}}>
              {this.props.des}
            </Text>
          </View>
          <View style={{backgroundColor:"#fff",justifyContent:"center",alignItems:"center",marginTop:10,padding:10}}>
            <TouchableOpacity
              style={{backgroundColor:"#0D47A1",width:width-20,padding:20,alignItems:"center",justifyContent:"center"}}
              onPress={()=>{this.xacthuc()}}
            >
              <Text style={{fontSize:20,color:"#FFF"}}>
                THÊM VÀO GIỎ HÀNG
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{height:70}}>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Chitiet);
