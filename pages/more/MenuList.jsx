import React, { Component } from 'react';
import {MenuWrap} from './moreStyled'
export class MenuList extends Component {
  render() {
    return (
         <MenuWrap>
          <div className="tit">
            <span>我的识货</span>
          </div>
          <ul>
            <li>
              <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png" alt=""/>
              <p>我的收藏</p>
            </li>
            <li>
              <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png" alt=""/>
              <p>我的晒物</p>
            </li>
            <li>
              <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/kaiquan.png" alt=""/>
              <p>我的礼品</p>
            </li>
          </ul>
          <div className="tit">
            <span>识货必备</span>
          </div>
          <ul>
            <li>
              <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png" alt=""/>
              <p>推荐店铺</p>
            </li>
            <li>
              <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png" alt=""/>
              <p>黑科技选鞋</p>
            </li>
          </ul>
       </MenuWrap>
    );
  }
}

export default MenuList;
