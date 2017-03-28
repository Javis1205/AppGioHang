import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import {Actions} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');

export default class Menu extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"#42A5F5",alignItems:"center"}}>
        <View>
          <Image style={{height:height/4,width:(width/3)*2}} source={{uri:"https://image.freepik.com/free-vector/abstract-background-with-a-watercolor-texture_1048-2144.jpg"}}/>
        </View>
        <View style={{marginTop:-(height/10)}}>
          <Image style={{height:((((width/3)*2)-40)/315)*66,width:((width/3)*2)-40}} source={{uri:"http://www.tatosagift.com/images/logo02.png"}}/>
        </View>
        <View style={{backgroundColor:"#2196F3",width:(width/3)*2,padding:10}}>
          <Text style={{fontSize:16,color:"#FFF"}}>
            Sản Phẩm
          </Text>
        </View>
        <View style={{width:(width/3)*2}}>
          <TouchableOpacity style={{flexDirection:"row",width:(width/3)*2,paddingTop:10,paddingLeft:20}} onPress={()=>{Actions.newd()}}>
            <View>
              <Icon name='tasks' size={20} style={{color:'#FFF'}} />
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{color:"#FFF"}}>
                Danh Mục
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#2196F3",height:1,width:(width/3)*2,marginTop:10}}>
        </View>
        <View style={{width:(width/3)*2}}>
          <TouchableOpacity style={{flexDirection:"row",width:(width/3)*2,paddingTop:10,paddingLeft:20}}>
            <View>
              <Icon name='shopping-bag' size={20} style={{color:'#FFF'}} />
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{color:"#FFF"}}>
                Thương hiệu
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#2196F3",height:1,width:(width/3)*2,marginTop:10}}>
        </View>
        <View style={{width:(width/3)*2}}>
          <TouchableOpacity style={{flexDirection:"row",width:(width/3)*2,paddingTop:10,paddingLeft:20}}>
            <View>
              <Icon name='stack-overflow' size={20} style={{color:'#FFF'}} />
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{color:"#FFF"}}>
                Phân loại
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#2196F3",height:1,width:(width/3)*2,marginTop:10}}>
        </View>
        <View style={{backgroundColor:"#2196F3",width:(width/3)*2,padding:10}}>
          <Text style={{fontSize:16,color:"#FFF"}}>
            Cửa Hàng
          </Text>
        </View>
        <View style={{width:(width/3)*2}}>
          <TouchableOpacity style={{flexDirection:"row",width:(width/3)*2,paddingTop:10,paddingLeft:20}} onPress={()=>{Actions.gioithieu()}}>
            <View>
              <Icon name='book' size={20} style={{color:'#FFF'}} />
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{color:"#FFF"}}>
                Giới Thiệu
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#2196F3",height:1,width:(width/3)*2,marginTop:10}}>
        </View>
        <View style={{width:(width/3)*2}}>
          <TouchableOpacity style={{flexDirection:"row",width:(width/3)*2,paddingTop:10,paddingLeft:20}} onPress={()=>{Actions.lienhe()}}>
            <View>
              <Icon name='address-card' size={20} style={{color:'#FFF'}} />
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{color:"#FFF"}}>
                Liên Hệ
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#2196F3",height:1,width:(width/3)*2,marginTop:10}}>
        </View>
        <View style={{width:(width/3)*2}}>
          <TouchableOpacity style={{flexDirection:"row",width:(width/3)*2,paddingTop:10,paddingLeft:20}} onPress={()=>{Actions.cauhoi()}}>
            <View>
              <Icon name='question-circle' size={20} style={{color:'#FFF'}} />
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{color:"#FFF"}}>
                Những câu hỏi thường gặp
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#2196F3",height:1,width:(width/3)*2,marginTop:10}}>
        </View>
      </View>
    );
  }
}
