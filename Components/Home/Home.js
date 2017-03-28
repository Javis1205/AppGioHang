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
export class Home extends Component{
  constructor (props) {
    super(props)
    this.state = {
      imgList: [
        'https://static.unica.vn/uploads/images/Thaoptt/Youtube_m.jpg',
        'https://chanhtuoi.com/wp-content/uploads/2016/12/hop-qua-trang-diem-za-beauty-box-rd407-giam-gia-manh.jpg',
        'http://www.ghienkhuyenmai.com/sites/default/files/styles/thumb_w600/public/plupload/giamgia30_-_copy.jpg?itok=cP9O550Y',
        'http://magiamgiakhoahoc.com/wp-content/uploads/2017/02/banhang-facebook-09_m.jpg'
      ],
      loadQueue: [0, 0, 0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }
  render(){
    return(
      <View style={{backgroundColor:"#FFF",flex:1}}>

        <View style={{flexDirection:"row",backgroundColor:"#42A5F5",height:55,justifyContent:"space-between",alignItems:"center",padding:10}}>
          <View>
            <TouchableOpacity style={{marginTop:-5}} onPress={()=>{Actions.refresh({key: 'drawer', open: value => !value })}}>
              <Icon name='bars' size={30} style={{color:'#0D47A1'}} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{fontSize:20,color:"#FFF"}}>
              TATOSA-GIFT
            </Text>
          </View>
          <View>
            <TouchableOpacity style={{marginTop:-5,flexDirection:"row"}} onPress={()=>{Actions.giohang({type:"reset"})}}>

              <View style={{backgroundColor: !this.props.DATA.length ? "#42A5F5": "#ee2211",borderRadius:20,width:20,height:20,alignItems:"center"}}>
                  <Text style={{fontSize:11,marginTop:2,color:'#FFF'}}>
                  {
                    !this.props.DATA.length ? "" : this.props.DATA.length
                  }
                  </Text>
              </View>
              <View style={{marginLeft:0}}>
                <Icon name='shopping-cart' size={30} style={{color:'#0D47A1'}} />
              </View>

            </TouchableOpacity>
          </View>
        </View>
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
          <View style={{marginTop:5}}>
            <Swiper
             loadMinimal
             loadMinimalSize={1}
             style={styles.wrapper}
             height={width/2+66} loop={false}
             autoplay={true} autoplayTimeout={6}
             dotColor={"#FFF"}
             paginationStyle={{
              bottom: 0
            }}
              >
              {
                this.state.imgList.map((item, i) => <Slide
                  loadHandle={this.loadHandle}
                  loaded={!!this.state.loadQueue[i]}
                  uri={item}
                  i={i}
                  key={i} />)
              }
            </Swiper>
          </View>
          <View>
            <View style={{flexDirection:"row",height:height/4,justifyContent:"space-between",padding:5}}>
              <View>
                <TouchableOpacity>
                  <Image
                    style={{height:height/4,width:(width-15)/2}}
                    source={{uri: 'https://uphinhnhanh.com/images/2017/02/26/order.png'}}
                  />
                </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity>
                <Image
                  style={{height:height/4,width:(width-15)/2}}
                  source={{uri: 'https://uphinhnhanh.com/images/2017/02/26/sale.png'}}
                />
              </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={{height:(height/10)-10,width:width,marginTop:8}}
                  source={{uri: 'https://uphinhnhanh.com/images/2017/02/26/quangcao.png'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
