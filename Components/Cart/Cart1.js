import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Ac from "../reducers/actions.js";
import {Actions} from "react-native-router-flux";
var {height, width} = Dimensions.get('window');
import Item from "./Item.js";
function mapStateToProps(state){
  return {DATA:state.data}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class GioHang1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      ARRAY1:[],
      ARRAY2:[],
      giohang:<View></View>,
      total:0,
    }

  }
  render(){

    return(

      <View style={{flex:1,backgroundColor:"#ddd",paddingBottom:75,justifyContent:"space-between"}}>
      <View style={{flexDirection:"row",backgroundColor:"#42A5F5",height:75,justifyContent:"space-between",alignItems:"center",padding:10}}>
        <View>
          <TouchableOpacity style={{marginTop:-5}} onPress={()=>{Actions.homed()}}>
            <Icon name='chevron-left' size={20} style={{color:'#FFF'}} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize:20,color:"#FFF"}}>
            Giỏ Hàng
          </Text>
        </View>
        <View>
        </View>
      </View>
        <View style={{height:height-235}}>
          <ScrollView >
            {this.state.giohang}
          </ScrollView>
        </View>
        <View style={{height:100,backgroundColor:"#FFF"}}>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:10,height:50}}>
            <Text style={{fontSize:18,color:"#666"}}>Tong tien: </Text>
            <Text style={{fontSize:18,color:"#ee2211"}}>
               {this.state.total} Đ
            </Text>
          </View>
          <View>
            <TouchableOpacity
            style={{
              height:50,padding:10,
              justifyContent:"center",
              alignItems:"center",
              backgroundColor:"#F08080"}}
              onPress={()=>{
                Actions.thanhtoan({
                  ARRAY1:this.state.ARRAY1,
                  ARRAY2:this.state.ARRAY2,
                  total:this.state.total
                })
              }}
              >
              <Text style={{fontSize:20,color:"#FFF"}}>
                THANH TOÁN
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
  componentWillMount(){
    this.transformArrayUnique(this.props.DATA);
  }
  componentDidMount(){
    this.renderItem();
  }
  dup(ARR,v){
    for (let i = 0; i < ARR.length; i++) {
      if(ARR[i].name === v) return true;
    }
    return false
  }

  transformArrayUnique(ARR){
    var arr = [];
    for(let i = 0; i < ARR.length; i++) {
        let BOOL = this.dup(arr,ARR[i].name);
        if(!BOOL) {
            arr.push(ARR[i]);
        }
    };
    this.setState({
      ARRAY1 : arr,
    });
    this.transformArrayNum(ARR,arr);
  }
  transformArrayNum(ARR,arr2){
    let arr= [];
    arr2.forEach((e,i)=>{
      let num = 0;
      for (let j = 0; j < ARR.length; j++) {
        if(ARR[j].name === arr2[i].name){
          num+=1;
        }
      }
      arr.push(num);
    });
    this.setState({
      ARRAY2 : arr,
    });
    this.Total(arr2,arr);
  }
  Total(arr1,arr2){
    let total = 0;
    for (var i = 0; i < arr1.length; i++) {
      let cost = arr1[i].cost;
      let num  = arr2[i];
      total = total + (Number(cost) * num) ;
      this.setState({
        total : total,
      });
    }
  }
  Refresh(){
    this.forceUpdate(render);
  }
  renderItem(){
    let arr1 = this.state.ARRAY1;
    let arr2 = this.state.ARRAY2;
    this.setState({
      giohang: arr1.map((o,i)=>{
        return(
          <Item
            THIS={this}
            onUpdate={()=>{this.Refresh()}}
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
export default connect(mapStateToProps,mapDispatchToProps)(GioHang1);
