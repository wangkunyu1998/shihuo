import React, { Component } from 'react';
import BScroll from 'better-scroll'
import {HotWrap} from './findStyled'
export class HotBlock extends Component {
  
  render() {
    return (
      <HotWrap>
      <div className="title">
        热门话题
      </div>
      <div className="slide-container">
        <div className="slide-wrapper">
          <div className="slide">
            <div className="imgs">
              <img src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg" alt=""/>
            </div>
            <div className="text">
            # 晒穿搭，AJ11 CONCORD 领回家！！ #
            </div>
          </div>
          <div className="slide">
            <div className="imgs">
              <img src="http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg" alt=""/>
            </div>
            <div className="text">
            # 限时下单 全场返利 #
            </div>
          </div>
          <div className="slide">
            <div className="imgs">
              <img src="http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png" alt=""/>
            </div>
            <div className="text">
            # 晒照赢新年康扣 #
            </div>
          </div>
          <div className="look-more">
            查看更多
          </div>
        </div>
      </div>
      </HotWrap>
    );
  }
  componentDidMount(){
 
 new BScroll('.slide-container',{
    scrollX:true,
    scrollY:false,
  })
  }
}

export default HotBlock;
