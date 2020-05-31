import React, { Component } from 'react';
import {HotWrap} from './indexStyled' 
export class Hot extends Component {
  render() {
    return (
      <HotWrap>
       <div>
         <h2>今日优惠</h2>
         <p>EQT 5折好价</p>
         <img src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1" alt=""/>
       </div>
       <div>
         <h2>限时团购</h2>
         <p>春节不打烊</p>
         <img src="http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1" alt=""/>
       </div>
       <div>
         <h2>免费抽奖</h2>
         <p>识货抽奖 天天免费</p>
         <img src="http://shihuo.hupucdn.com/kupload2018/2019715/15631798110000.jpeg?imageView2/2/w/120/h/120/interlace/1" alt=""/>
       </div>
      </HotWrap>
    );
  }
}

export default Hot;
