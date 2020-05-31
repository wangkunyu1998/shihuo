import React, { Component } from 'react';
import {BannerWrap} from './moreStyled'
export class BannerBlock extends Component {
  render() {
    return (
      <BannerWrap>
       <div className="userface">
         <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png" alt=""/>
       </div>
       <div className="login">
        <span>登录</span>
        <span>注册</span>
        <p>金币 0</p>
       </div>
      </BannerWrap>
    );
  }
}

export default BannerBlock;
