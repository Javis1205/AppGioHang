import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity,Dimensions,Alert} from "react-native";
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
export class Item extends Component{
  constructor(props){
    super(props);
    this.state={
      HINH:this.props.HINH,
      NAME:this.props.NAME,
      SOLUONG:this.props.SOLUONG,
      DONGIA:this.props.DONGIA,
      NUM:this.props.NUM
    }
  }

  DELCART(){
    this.props.DELCART({
      NAME : this.state.NAME
    });
    Actions.between();
  }
  MinusItem(){
    this.props.MINUS({
      NAME : this.state.NAME
    });
    Actions.between();
  }
  PlusItem(){
    if (this.state.SOLUONG < this.state.NUM ) {
      this.props.PLUS({
        NAME : this.state.NAME
      });
      Actions.between();
    }else {
      Alert.alert('Không đủ sản phẩm !!')
    }
  }
  render(){
    return(
      <View style={styles.item}>
        <View style={styles.left}>
          <Image style={styles.img} source={{uri:this.state.HINH}} />
        </View>
        <View style={styles.right}>
          <Text style={{fontSize:20}}>
            {this.state.NAME}
          </Text>
          <View style={{marginTop:20,flexDirection:"row"}}>
            <Text>
              Số Lượng :
            </Text>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:-5,marginLeft:10}}>
              <TouchableOpacity style={{borderWidth:1,borderColor:"gray",padding:5,borderRightWidth:0}} onPress={()=>{this.MinusItem()}}>
                <Text>
                  -
                </Text>
              </TouchableOpacity>
              <View style={{borderWidth:1,borderColor:"gray",padding:5}}>
                <Text style={{color:"#ee2211"}}>
                  {this.state.SOLUONG}
                </Text>
              </View>
              <TouchableOpacity style={{borderWidth:1,borderColor:"gray",padding:5,borderLeftWidth:0}} onPress={()=>{this.PlusItem()}}>
                <Text>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Text>
              Đơn Giá :
            </Text>
            <Text style={{color:"#ee2211",marginLeft:-100}}>
               {this.state.SOLUONG * this.state.DONGIA} Đ
            </Text>
            <TouchableOpacity onPress={()=>{this.DELCART()}}>
              <Icon name='trash-o' size={20} style={{color:"#999"}}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

var styles=StyleSheet.create({
  item:{flexDirection:"row", padding:10,backgroundColor:"#FFF",marginBottom:10},
  img:{height:width/3-25,width:width/3-40,borderWidth:1,borderColor:"#ddd"},
  left:{flex:2},
  right:{flex:5},
});
export default connect(mapStateToProps,mapDispatchToProps)(Item);
