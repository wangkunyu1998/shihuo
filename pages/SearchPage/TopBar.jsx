import React, { Component } from 'react';
import {TopbarWrap} from './SearchPageW'
export class TopBar extends Component {
  goBack=()=>{
    console.log(this.props)
    this.props.history.goBack()
  }
  render() {
    return (
      <TopbarWrap>
        <div className="goback" onClick={this.goBack}>
          <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" alt=""/>
        </div>
        <div className="searchbox">
          <form id="searchform" action="#">
            <div className="search">
              <input  className="input" placeholder="请输入产品名或商品名" id="searchVal" />
            </div>
          </form>
        </div>
        <div className="icon-list">
          <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" alt=""/>
        </div>
      </TopbarWrap>
    );
  }
}

export default TopBar;
