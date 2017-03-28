import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
var {height, width} = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
const q1 = "Quý khách hàng có thể đặt hàng theo các cách sau:- Truy cập website Tatosagift.com, đăng kí, đăng nhập tài khoản và lưa chọn sản phẩm phù hợp với nhu cầu của quý khách hàng -Like Fanpage Tatosa Gift để xem sản phẩm và lựa chọn sản phẩm phù hợp với  nhu cầu của quý khách hàng. -Đặt hàng qua điện thoại:  (08) 6.258.9638. -Mua hàng trực tiếp tại địa chỉ: 31/18 Ung Văn khiêm, P.25, Q.Bình Thạnh, tp. HCM.";
const q2 = "Bạn có t hể sử dụng ATM, hoặc thông qua hệ thống ngân hàng để chuyển tiền sau khi đã    đặt hàng. Sau khi bạn chuyển khoản, vui lòng xác nhận chuyển khoản với bộ phận bán hàng online (08) 6.258.9638 , để có thể nhận được hàng trong thời gian sớm nhất.";
const q3 = "Ngay khi đơn hàng của bạn được xác nhận, chúng tôi sẽ tiến hành giao hàng cho bạn trong thời gian sớm nhât, đối với quý khách ở khu vực ngoại tỉnh, chúng tôi sẽ nhờ dịch vụ chuyển phát và thời gian nhận hàng của quý khách là từ 2-5 ngày trong thời gian làm việcc.";
const q4 = "Tatosagift chỉ chấp nhận đổi trả hàng cho quý khách trong vòng 2-3 ngày kể từ thời điểm mua hàng trong các trường hợp sau: Hàng hoá vẫn còn mới, chưa có dấu hiệu bị va đập, rơi rớt hay trầy tróc, vào nước Hàng hoá bị lỗi hoặc hư hỏng do vận chuyển hoặc do nhà sản xuất. Hàng không đúng chủng loại, mẫu mã như quý khách đặt hàng. Không đủ số lượng, không đủ bộ như trong đơn hàng. Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể  vỡ… Không đạt chất lượng như quá hạn sử dụng, không vận hành được...";
const CONTENT = [
  {
    title: 'Tôi muốn mua hàng thì phải làm sao??',
    content: q1,
  },
  {
    title: 'Tôi có thể thanh toán, chuyến khoản đến Tatosagift bằng cách nào?',
    content: q2,
  },
  {
    title: 'Từ khi tôi mua hàng đến khi nhận hàng là bao lâu?',
    content: q3,
  },
  {
    title: 'Tôi mua hàng rồi không vừa ý, có thể đổi, trả lại hay không?',
    content: q4,
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
    value: false,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

export default class Cauhoi extends Component {
  state = {
    activeSection: false,
    collapsed: true,
  };

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View>
          <Image style={{height:height,width:width}} source={{uri:"https://image.freepik.com/free-vector/abstract-background-with-a-watercolor-texture_1048-2144.jpg"}}/>
        </View>
        <ScrollView style={{marginTop:-(height-150)}} showsVerticalScrollIndicator={false}>
          <View style={{width:width,alignItems:"center",marginBottom:20}}>
            <Image style={{height:((((width/3)*2)-40)/315)*66,width:((width/3)*2)-40}} source={{uri:"http://www.tatosagift.com/images/logo02.png"}}/>
          </View>
          <Accordion
            activeSection={this.state.activeSection}
            sections={CONTENT}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            duration={400}
            onChange={this._setSection.bind(this)}
          />
          <View style={{height:100,width:width}}>
          </View>
        </ScrollView>
      </View>
    );
  }
}
