import React, { Component } from 'react';
import { TabBar}  from 'antd-mobile'
import {Route,withRouter} from  'react-router-dom'
import Index from './index/Index'
import Search from '@/Search'

import Discount from './discount/Discount.jsx'

import Find from './find/Find'

import More from './more/More'

import Map2 from './map/Map'
@withRouter
 class Layout extends Component {
  constructor(props){
      super(props);
      this.state={
        selectedTab:'index',
        hidden:false,
        fullScreen:true,
      }
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }} >
        
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#FF4338"
          prerenderingSiblingsNumber="0"
          barTintColor="rgb(255, 255, 255, 0.1)"
          hidden={this.state.hidden}
          style={{"background":"#000"}}
        >
          <TabBar.Item
            title="首页"
            key="index"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/index.png?201903111600) center center /  25px 25px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/index-on.png?201903111600) center center /  25px 25px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'index'}
            onPress={() => {
             this.props.history.push('index')
              this.setState({
                selectedTab: 'index',
              });
            }}
            data-seed="logId"
          >
            
            <Route path="/Layout/index" component={Index} />
            <Route path="/Layout/search"   component={Search} />
           
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/youhui.png?201903111600) center center /  25px 25px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/youhui-on.png?201903111600) center center /  25px 25px no-repeat' }}
              />
            }
            title="优惠"
            key="Discount"
            selected={this.state.selectedTab === 'Discount'}
            onPress={() => {
              this.props.history.push('discount')
              this.setState({
                selectedTab: 'Discount',
              });
            }}
            data-seed="logId1"
          >
          <Route path="/Layout/discount" component={Discount} />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/find.png?201903111600) center center /  25px 25px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/find-on.png?201903111600) center center /  25px 25px no-repeat' }}
              />
            }
            title="发现"
            key="find"
            selected={this.state.selectedTab === 'find'}
            onPress={() => {
              this.props.history.push('find')
              this.setState({
                selectedTab: 'find',
              });
            }}
          >
             <Route path="/Layout/find" component={Find} />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei.png?201903111600' }}
            selectedIcon={{ uri: 'http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei-on.png?201903111600' }}
            title="装备"
            key="equipment"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.props.history.push('map')
              this.setState({
                selectedTab: 'yellowTab',
              })
            }
            }
          >
          
            <Route path="/Layout/map" component={Map2} />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'http://sh1.hoopchina.com.cn/images/trademobile/common/more.png?201903111600' }}
            selectedIcon={{ uri: 'http://sh1.hoopchina.com.cn/images/trademobile/common/more-on.png?201903111600' }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.props.history.push('more')
              this.setState({
                selectedTab: 'more',  
              });
            }}
          >
            <Route path="/Layout/more" component={More} />
          </TabBar.Item>
      
        </TabBar>
      </div>
    );
  }
}

export default  Layout;
