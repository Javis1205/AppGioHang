import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Ac from "../reducers/actions.js";
import {Actions} from "react-native-router-flux";
var {height, width} = Dimensions.get('window');
import SanPham from './SanPham';
import {firebaseApp} from "../Config/FirebaseConfig.js";
function mapStateToProps(state){
  return {DATA:state.data}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class ThanhToan extends Component{
  constructor(props){
    super(props);
    this.itemRef = firebaseApp.database();
    this.state = {
      giohang:<View></View>,
      hovaten:"",
      diachi:"",
      sodienthoai:"",
    }

  }
  addDB(){
    let arr1 = this.props.ARRAY1;
    let arr2 = this.props.ARRAY2;
    let arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
      arr3.push(arr1[i].name);
    };
    let tensanpham = JSON.stringify(arr3);
    let soluong = JSON.stringify(arr2);
    this.itemRef.ref("DonHang").push({
      hovaten: this.state.hovaten,
      diachi: this.state.diachi,
      sodienthoai: this.state.diachi,
      tensanpham: tensanpham,
      soluong: soluong
    })
    this.RESETCART();
  }
  RESETCART(){
    this.props.RESETCART();
    Alert.alert(
      'Xác Nhận',
      'Đơn hàng đã được đặt thành công ,bạn có muốn trở lại trang chủ ?',
      [
        {text: 'Có', onPress: () => {Actions.homed()}},
      ],
      { cancelable: false }
    )
  }
  Add(){
    Alert.alert(
      'Xác Nhận',
      'Ban có muốn thanh toán cho đơn hàng trên không ?',
      [
        {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Có', onPress: () => {this.thanhtoan()}},
      ],
      { cancelable: false }
    )
  }
  thanhtoan(){
    if(this.state.giohang == <View></View> || this.state.hovaten == "" || this.state.diachi == "" || this.state.sodienthoai == "")
    {
        Alert.alert("Đơn hàng không hợp lệ vui lòng kiểm tra lại")
    }
    else
    {
        this.addDB();
    }
  }
  render(){

    return(
      <View style={{flex:1,backgroundColor:"#ddd",paddingTop:75,paddingBottom:75,alignItems:"center"}}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{backgroundColor:"#FFF",padding:10,justifyContent:"center",alignItems:"center"}}>
            <View style={{marginBottom:20,height:width/2+20,width:width-20,backgroundColor:"#ddd",paddingTop:10}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {this.state.giohang}
              </ScrollView>
            </View>
            <View style={{width:width-20,flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:10,height:50}}>
              <Text style={{fontSize:18,color:"#000"}}>Tong tien: </Text>
              <Text style={{fontSize:18,color:"#ee2211"}}>
                 {this.props.total} Đ
              </Text>
            </View>
          </View>
          <View style={{marginTop:20,backgroundColor:"#FFF",padding:10,justifyContent:"center",alignItems:"center"}}>
            <View>
              <Text style={{fontSize:20,padding:5,paddingTop:0,color:"#666"}}>
                Họ và tên :
              </Text>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:width-20,borderRadius:5, borderColor: '#0D47A1', borderWidth: 1,marginTop:5}}>
                <Icon name='pencil' size={20} style={{backgroundColor:"transparent",color:'#0D47A1',marginLeft:10}} />
                <TextInput style={{
                  width:width-50,
                  flexDirection:"row",
                  height:30,
                  paddingLeft:5,
                  marginTop:5,
                  color:"#0D47A1"
                }}
                onChangeText={(text) => this.setState({hovaten:text})}
                value={this.state.hovaten}
                />
              </View>
            </View>
            <View>
              <Text style={{fontSize:20,padding:5,paddingTop:5,paddingBottom:0,color:"#666"}}>
                Địa Chỉ:
              </Text>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:width-20,borderRadius:5, borderColor: '#0D47A1', borderWidth: 1,marginTop:5}}>
                <Icon name='pencil' size={20} style={{backgroundColor:"transparent",color:'#0D47A1',marginLeft:10}} />
                <TextInput style={{
                  width:width-50,
                  flexDirection:"row",
                  height:30,
                  paddingLeft:5,
                  marginTop:5,
                  color:"#0D47A1"
                }}
                onChangeText={(text) => this.setState({diachi:text})}
                value={this.state.diachi}
                />
              </View>
            </View>
            <View>
              <Text style={{fontSize:20,padding:5,paddingTop:5,paddingBottom:0,color:"#666"}}>
                Số Điện Thoại:
              </Text>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:width-20,borderRadius:5, borderColor: '#0D47A1', borderWidth: 1,marginTop:5}}>
                <Icon name='pencil' size={20} style={{backgroundColor:"transparent",color:'#0D47A1',marginLeft:10}} />
                <TextInput style={{
                  width:width-50,
                  flexDirection:"row",
                  height:30,
                  paddingLeft:5,
                  marginTop:5,
                  color:"#0D47A1"
                }}
                onChangeText={(text) => this.setState({sodienthoai:text})}
                value={this.state.sodienthoai}
                />
              </View>
            </View>
          </View>
          <View style={{marginTop:20,backgroundColor:"#FFF",padding:10,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity
            style={{
              height:50,width:width-20,padding:10,
              justifyContent:"center",
              alignItems:"center",
              backgroundColor:"#F08080"}}
              onPress={()=>{
                this.Add();
              }}
              >
              <Text style={{fontSize:20,color:"#FFF"}}>
                THANH TOÁN
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  componentDidMount(){
    this.renderItem()
  }
  renderItem(){
    let arr1 = this.props.ARRAY1;
    let arr2 = this.props.ARRAY2;
    this.setState({
      giohang: arr1.map((o,i)=>{
        return(
          <SanPham
            NAME={o.name}
            HINH={o.image}
            SOLUONG={arr2[i]}
            DONGIA={o.cost}
            key={i}
          />
        );
      })
    })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ThanhToan);
