import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/FontAwesome';
var {height, width} = Dimensions.get('window');
export default class Lienhe extends Component{
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
            <View style={{width:width,flexDirection:"row",marginTop:40}}>
              <View style={{width:width/3,flexDirection:"row",padding:10}}>
                <Icon name='map-marker' size={20} style={{color:'#0D47A1',marginTop: -2, marginRight:10}} />
                <Text style={{fontSize:16,color:"#0D47A1"}}>
                  ĐỊA CHỈ :
                </Text>
              </View>
              <View style={{width:(width/3)*2,marginTop:9,marginRight:20}}>
                <Text style={{fontSize:16,color:"#D047A1"}}>
                  31/18 Ung Văn Khiêm, Phường 25, Quận Bình Thạnh, TP.HCM
                </Text>
              </View>
            </View>
            <View style={{width:width,flexDirection:"row",marginTop:20}}>
              <View style={{width:width/2,flexDirection:"row",padding:10}}>
                <Icon name='phone' size={20} style={{color:'#0D47A1',marginTop: 0, marginRight:10}} />
                <Text style={{fontSize:16,color:"#0D47A1"}}>
                  SỐ ĐIỆN THOẠI :
                </Text>
              </View>
              <View style={{width:width/2,marginTop:9,marginRight:20}}>
                <Text style={{fontSize:16,color:"#D047A1"}}>
                  01664628565
                </Text>
              </View>
            </View>
            <View style={{marginTop:20,flexDirection:"row"}}>
              <View style={{alignItems:"center",width:(width/2)-20,backgroundColor:"#42A5F5",marginRight:10}}>
                <TouchableOpacity style={{flexDirection:"row",paddingLeft:30,paddingRight:30,paddingTop:7,paddingBottom:7}} onPress={() => Communications.phonecall('01664628565', true)}>
                  <Icon name='phone' size={20} style={{color:'#FFF',marginTop: 0, marginRight:10}} />
                  <Text style={{color:'#FFF', fontSize:16}}>
                    Gọi điện
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems:"center",width:(width/2)-20,backgroundColor:"#42A5F5",marginLeft:10}}>
                <TouchableOpacity style={{flexDirection:"row",paddingLeft:30,paddingRight:30,paddingTop:7,paddingBottom:7}}>
                  <Icon name='facebook' size={20} style={{color:'#FFF',marginTop: 0, marginRight:10}} />
                  <Text style={{color:'#FFF', fontSize:16}}>
                    Facebook
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop:20,flexDirection:"row"}}>
              <View style={{alignItems:"center",width:(width/2)-20,backgroundColor:"#42A5F5",marginRight:10}}>
                <TouchableOpacity style={{flexDirection:"row",paddingLeft:30,paddingRight:30,paddingTop:7,paddingBottom:7}}>
                  <Icon name='twitter' size={20} style={{color:'#FFF',marginTop: 0, marginRight:10}} />
                  <Text style={{color:'#FFF', fontSize:16}}>
                    Twitter
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems:"center",width:(width/2)-20,backgroundColor:"#42A5F5",marginLeft:10}}>
                <TouchableOpacity style={{flexDirection:"row",paddingLeft:30,paddingRight:30,paddingTop:7,paddingBottom:7}}>
                  <Icon name='google' size={20} style={{color:'#FFF',marginTop: 0, marginRight:10}} />
                  <Text style={{color:'#FFF', fontSize:16}}>
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{width:width,flexDirection:"row",marginTop:20}}>
              <View style={{width:width/2,flexDirection:"row",padding:10}}>
                <Icon name='map' size={20} style={{color:'#0D47A1',marginTop: 0, marginRight:10}} />
                <Text style={{fontSize:16,color:"#0D47A1"}}>
                  BẢN ĐỒ :
                </Text>
              </View>
            </View>
            <View>
              <View style={{height:(((width)/749)*354),width:width,backgroundColor:"#42A5F5",marginTop:20,alignItems:"center"}}>
                <View style={{marginTop:4}}>
                  <Image
                    style={{height:(((width-8)/749)*354)-4,width:width-8}}
                    source={{uri: "https://uphinhnhanh.com/images/2017/02/28/map1e306.png"}}
                  />
                </View>
              </View>
            </View>
            <View style={{height:100,width:width}}>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}
