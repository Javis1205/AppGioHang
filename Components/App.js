import React, { Component } from 'react';
import{View,Text} from "react-native";
import { Router,Scene,Actions } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationDrawer from "./Home/NavigationDrawer";
import Home             from "./Home/Home";
import Cart             from "./Cart/Cart";
import GioHang          from "./Cart/Cart1";
import Shop             from "./Shop/Shop";
import Chitiet          from "./Chitiet/Chitiet";
import DacSanVietNam    from "./Shop/DacSanVietNam";
import HangNhapKhau     from "./Shop/HangNhapKhau";
import RauCuQuaSay      from "./Shop/RauCuQuaSay";
import TraVaCafe        from "./Shop/TraVaCafe";
import HatDinhDuong     from "./Shop/HatDinhDuong";
import MyPhamThienNhien from "./Shop/MyPhamThienNhien";
import Gioithieu        from "./Home/Gioithieu";
import Cauhoi           from "./Home/Cauhoi";
import Lienhe           from "./Home/Lienhe";
import Between          from "./Cart/Between";
import ThanhToan        from "./Cart/ThanhToan";
import Search           from "./Search/Search";
const RouterWithRedux = connect()(Router);
// other imports...

// create store...


class App extends Component {
  render () {
    const TabIcon = ({ selected, title }) => {
      switch (title) {
        case "Trang Chủ":
          return (
            <View style={{alignItems:"center"}}>
              <Icon name='home' size={30} style={{color: selected ? '#0D47A1' :'#FFF'}} />
              <Text style={{color: selected ? '#0D47A1' :'#FFF'}}>{title}</Text>
            </View>

          );
          break;
          case "Tìm Kiếm":
            return (
              <View style={{alignItems:"center"}}>
                <Icon name='search' size={30} style={{color: selected ? '#0D47A1' :'#FFF'}} />
                <Text style={{color: selected ? '#0D47A1' :'#FFF'}}>{title}</Text>
              </View>

            );
            break;
            case "Sản Phẩm":
              return (
                <View style={{alignItems:"center"}}>
                  <Icon name='newspaper-o' size={30} style={{color: selected ? '#0D47A1' :'#FFF'}} />
                  <Text style={{color: selected ? '#0D47A1' :'#FFF'}}>{title}</Text>
                </View>

              );
              break;
        default:

      }
    }
    return (
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="tabbar" tabBarStyle={{ backgroundColor:'#42A5F5',height:60}} tabs >
              <Scene key="homed" title="Trang Chủ" icon={TabIcon}>
                <Scene key="drawer" component={NavigationDrawer} open={false} >
                  <Scene key="home" component={Home} />
                  <Scene key="thanhtoan" component={ThanhToan} titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}} title="Thanh Toán" />
                  <Scene key="giohang" component={GioHang}  titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}} title="Giỏ Hàng" />
                </Scene>
                <Scene key="gioithieu" component={Gioithieu} title="Giới Thiệu"/>
                <Scene key="lienhe" component={Lienhe} title="Liên hệ"/>
                <Scene key="cauhoi" component={Cauhoi} title="Câu hỏi"/>
              </Scene>
              <Scene key="searchd" title="Tìm Kiếm" icon={TabIcon}>
                <Scene key="search" component={Search} title="Tìm kiếm" titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}}/>
              </Scene>
              <Scene key="newd" title="Sản Phẩm" icon={TabIcon}>
                <Scene key="shop" component={Shop} onBack={()=>{Actions.homed()}} title="Danh Mục Sản Phẩm" titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}}                   />
                <Scene key="chitiet" component={Chitiet} title="Chi tiết sản phẩm" titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}}             />
                <Scene key="hangnhap" component={HangNhapKhau}    title="Hàng Nhập Khẩu" titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}}       />
                <Scene key="raucu" component={RauCuQuaSay}        title="Rau Củ Quả Sấy" titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}}       />
                <Scene key="trava" component={TraVaCafe}          title="Trà Và Cà Phê" titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}}        />
                <Scene key="mypham" component={MyPhamThienNhien}  title="Mỹ Phẩm Thiên Nhiên" titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}}  />
                <Scene key="hatdinh" component={HatDinhDuong}     title="Hạt Dinh Dưỡng" titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}}       />
                <Scene key="dacsan" component={DacSanVietNam}     title="Đặc Sản Việt Nam" titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}}     />
                <Scene key="cart" direction="vertical" duration={5} component={Cart} titleStyle={{color:"#FFF",fontSize:18}} onBack={()=>{Actions.shop({type:"reset"})}} navigationBarStyle={{backgroundColor:"#42A5F5"}} title="Giỏ Hàng" />
                <Scene key="between" direction="vertical" duration={5} component={Between} titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}} title="Giỏ Hàng" />
                <Scene key="thanhtoan" component={ThanhToan} titleStyle={{color:"#FFF",fontSize:18}} navigationBarStyle={{backgroundColor:"#42A5F5"}} title="Thanh Toán" />
              </Scene>
            </Scene>

          </Scene>
        </RouterWithRedux>
    );
  }
}

export default App;
