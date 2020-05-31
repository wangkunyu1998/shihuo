import React, { Component } from 'react';
import {ZoneWrap,ZoneBorder} from './indexStyled'

export class Zone extends Component {
  render() {
    return (
      <ZoneWrap className="zone">
          <ul>
            <ZoneBorder
            width ="0 1px 1px 0"
            color="#f0f3f5"
            >
              <div className="tit">
                <h2>篮球</h2>
                <p>纯白系列秒杀</p>
              </div>
              <div className="pic">
                <img src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1" alt=""/>
              </div>
            </ZoneBorder>
            <ZoneBorder
            width ="0 0 1px 0"
            color="#f0f3f5"
            >
              <div className="tit">
                <h2>跑步</h2>
                <p>女王节秒杀</p>
              </div>
              <div className="pic">
                <img src="http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1" alt=""/>
              </div>
            </ZoneBorder>
            <ZoneBorder
            width ="0 1px 1px 0"
            color="#f0f3f5"
            >
              <div className="tit">
                <h2>健身</h2>
                <p>步瑞特装备秒杀</p>
              </div>
              <div className="pic">
                <img src="http://shihuo.hupucdn.com/def/20170915/f876eb7f43db68bf6618332e8e8d16391505460754.jpg?imageView2/0/w/160/h/160/interlace/1" alt=""/>
              </div>
            </ZoneBorder>
            <ZoneBorder
            width ="0 0 1px 0"
            color="#f0f3f5"
            >
              <div className="tit">
                <h2>足球</h2>
                <p>其实是在吹总裁</p>
              </div>
              <div className="pic">
                <img src="http://shihuo.hupucdn.com/trade/reposition/2017-09-13/6f2b59787e5a18c4dca091ce9ecb4fae.png?imageView2/0/w/160/h/160/interlace/1" alt=""/>
              </div>
            </ZoneBorder>
            <ZoneBorder
            width ="0 1px 1px 0"
            color="#f0f3f5"
            >
              <div className="tit">
                <h2>潮流</h2>
                <p>78元短袖秒杀</p>
              </div>
              <div className="pic">
                <img src="http://shihuo.hupucdn.com/trade/goods/style/20170411/adecead744a0d0c0a81a4803c5c84a821491896490.jpg?imageView2/0/w/160/h/160/interlace/1" alt=""/>
              </div>
            </ZoneBorder>
            <ZoneBorder
            width ="0 0 1px 0"
            color="#f0f3f5"
            >
              <div className="tit">
                <h2>数码</h2>
                <p>家用电吹风</p>
              </div>
              <div className="pic">
                <img src="http://shihuo.hupucdn.com/def/20180108/d46c35eb43ed513783e8db72e97e06a71515391268.jpg?imageView2/0/w/160/h/160/interlace/1" alt=""/>
              </div>
            </ZoneBorder>
          </ul>
      </ZoneWrap>
    );
  }
}

export default Zone;
