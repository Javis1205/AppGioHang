import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');
export default class Gioithieu extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View>
          <Image style={{height:height,width:width}} source={{uri:"https://image.freepik.com/free-vector/abstract-background-with-a-watercolor-texture_1048-2144.jpg"}}/>
        </View>
        <ScrollView style={{marginTop:-(height-100)}} showsVerticalScrollIndicator={false}>
          <View style={{alignItems:"center"}}>
            <View>
              <Image style={{height:((((width/3)*2)-40)/315)*66,width:((width/3)*2)-40}} source={{uri:"http://www.tatosagift.com/images/logo02.png"}}/>
            </View>

            <View style={{marginTop:50,width:width,flexDirection:"row"}}>
              <View style={{padding:10,backgroundColor:"#42A5F5",width:width/2,flexDirection:"row"}}>
                <Icon name='calendar-o' size={16} style={{color:'#FFF',marginTop:2,marginRight:5}} />
                <Text style={{color:"#FFF",fontSize:15}}>
                  Lịch Sử Hình Thành
                </Text>
              </View>
              <View style={{backgroundColor:"#42A5F5",width:width/2,height:2,marginTop:40}}>
              </View>
            </View>
            <View style={{width:width,padding:10}}>
              <Text style={{color:"#42A5F5"}}>
                  Cửa hàng được phát triển từ 20 năm trở về trước trong bối cảnh internet bùng nổ ...
              </Text>
            </View>
            <View style={{marginTop:10,width:width,flexDirection:"row"}}>
            <View style={{padding:10,backgroundColor:"#42A5F5",width:width/2,flexDirection:"row"}}>
              <Icon name='eye' size={16} style={{color:'#FFF',marginTop:2,marginRight:5}} />
              <Text style={{color:"#FFF",fontSize:15}}>
                Tầm nhìn
              </Text>
            </View>
              <View style={{backgroundColor:"#42A5F5",width:width/2,height:2,marginTop:40}}>
              </View>
            </View>
            <View style={{width:width,padding:10}}>
              <Text style={{color:"#42A5F5"}}>
                  Cửa hàng được phát triển từ 20 năm trở về trước trong bối cảnh internet bùng nổ ...
              </Text>
            </View>
            <View style={{marginTop:10,width:width,flexDirection:"row"}}>
              <View style={{padding:10,backgroundColor:"#42A5F5",width:width/2,flexDirection:"row"}}>
                <Icon name='pencil-square-o' size={16} style={{color:'#FFF',marginTop:2,marginRight:5}} />
                <Text style={{color:"#FFF",fontSize:15}}>
                  Sứ mệnh
                </Text>
              </View>
              <View style={{backgroundColor:"#42A5F5",width:width/2,height:2,marginTop:40}}>
              </View>
            </View>
            <View style={{width:width,padding:10}}>
              <Text style={{color:"#42A5F5"}}>
                  Cửa hàng được phát triển từ 20 năm trở về trước trong bối cảnh internet bùng nổ ...
              </Text>
            </View>
            <View style={{marginTop:10,width:width,flexDirection:"row"}}>
              <View style={{padding:10,backgroundColor:"#42A5F5",width:width/2,flexDirection:"row"}}>
                <Icon name='codepen' size={16} style={{color:'#FFF',marginTop:2,marginRight:5}} />
                <Text style={{color:"#FFF",fontSize:15}}>
                  Giá trị cốt lõi
                </Text>
              </View>
              <View style={{backgroundColor:"#42A5F5",width:width/2,height:2,marginTop:40}}>
              </View>
            </View>
            <View style={{width:width,padding:10}}>
              <Text style={{color:"#42A5F5"}}>
                  Cửa hàng được phát triển từ 20 năm trở về trước trong bối cảnh internet bùng nổ ...
              </Text>
            </View>
            <View style={{padding:50}}>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
