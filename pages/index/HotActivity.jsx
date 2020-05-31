import React, { Component } from 'react';
import {HAWrap} from './indexStyled'
export class HotActivity extends Component {
  render() {
    return (
      <HAWrap>
        <h3>热门活动</h3>
        <ul>
          <li>
            <div>
              <img src="http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg" alt=""/>
            </div>
            <p className="p1">skullcandy骷髅头耳机</p>
              <p className="p2">券后低至89元起</p>
          </li>
          <li>
            <div>
              <img src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg" alt=""/>
            </div>
            <p className="p1">花鸟市场行</p>
              <p className="p2">今天穿这样</p>
          </li>
          <li style={{marginRight:0}}>
            <div>
              <img src="http://shihuo.hupucdn.com/appZone/201811/1216/32de94d3d483749627b0716d9cde722b.png" alt=""/>
            </div>
            <p className="p1">潮流圈的编辑们</p>
              <p className="p2">Ta说</p>
          </li>
          <li>
            <div>
              <img src="http://shihuo.hupucdn.com/appZone/201805/0911/8c8778d4d917f0fb719a2f40ff3b71eb.jpg" alt=""/>
            </div>
            <p className="p1">数码测评</p>
              <p className="p2">全面解析热门数码产品</p>
          </li>
          <li>
            <div>
              <img src="http://shihuo.hupucdn.com/appZone/201807/2411/b9541b36f94bfa8c6c51482e7536eb35.jpg" alt=""/>
            </div>
            <p className="p1">实战性价比之选</p>
              <p className="p2">球星支线</p>
          </li>
          <li style={{marginRight:0}}>  
            <div>
              <img src="http://shihuo.hupucdn.com/appZone/201805/1415/b2ab22bb8987165ad1681520c9bbcf9c.jpg" alt=""/>
            </div>
            <p className="p1">好物推荐</p>
              <p className="p2">为您推荐潮酷好物</p>
          </li>
        </ul>
      </HAWrap>
    );
  }
}

export default HotActivity;
