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
import {firebaseApp} from "../Config/FirebaseConfig.js";
function mapStateToProps(state){
  return {DATA:state.data}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Ac,dispatch);
}
export class MyPhamThienNhien extends Component{
  constructor(props){
    super(props);
    this.itemRef = firebaseApp.database();
    this.state = {
      dataSource : new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
      isloading : true,
    }
  }
  listenForItems(itemRef){
    console.log("listen");
    var items = [];

    this.itemRef.ref('MyPhamThienNhien').on('child_added',(dataSnapshot)=>{
      items.push({
        gia:dataSnapshot.val().cost,
        key:dataSnapshot.key,
        image:dataSnapshot.val().image,
        mota:dataSnapshot.val().decriptions,
        num:dataSnapshot.val().num,
        maker:dataSnapshot.val().maker,
      });
      console.log(items);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
        isloading:false,
      });
    });
  }
  render(){
    console.log("render");
    if(this.state.isloading){
      return(
        <View style={{flex:1,backgroundColor:"#ddd",justifyContent:"center",alignItems:"center"}}>
          <Image style={{height:50,width:50}} source={require('../image/loading.gif')}/>
          <Text style={{fontSize:20, marginTop:10, marginLeft:10}}>
            Đang tải dữ liệu . . .
          </Text>

        </View>
      )
    }else {
      return(
        <View style={{flex:1,paddingTop:60,paddingBottom:70,justifyContent:"center",alignItems:"center",backgroundColor:"#ddd"}}>
          <ListView
            dataSource={this.state.dataSource}
            showsVerticalScrollIndicator={false}
            renderRow ={(rowData)=>
              <TouchableOpacity
                style={{width:width-20,
                flexDirection:"row",
                padding:5,
                backgroundColor:"#fff",
                marginTop:10}}
                onPress={()=>{Actions.chitiet({
                  image:rowData.image,
                  name:rowData.key,
                  cost:rowData.gia,
                  des:rowData.mota,
                  maker:rowData.maker,
                  num:rowData.num
                })}}
                >
                <Image source={{uri:rowData.image}} style={{height:width/3,width:width/3-30,borderWidth:1,borderColor:"#ddd"}}/>
                <View style={{padding:5,flex:1}}>
                  <Text style={{fontSize:20,flex:1,color:"#666"}} numberOfLines={1}>
                    {rowData.key}
                  </Text>
                  <Text style={{fontSize:16,color:"#ee2211",marginTop:10}}>
                    {rowData.gia} Đ
                  </Text>
                  <Text style={{fontSize:14,flex:1,color:"#666",marginTop:10}} numberOfLines={3}>
                    {rowData.mota}
                  </Text>
                </View>
              </TouchableOpacity>
            }
          />
        </View>
      );
    }
  }
  componentDidMount(){
    this.listenForItems(this.itemRef);
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyPhamThienNhien);
