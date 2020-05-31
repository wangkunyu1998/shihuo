import React, { Component } from 'react';
import {Carousel,WingBlank} from 'antd-mobile'
import {SwiperWrap} from '../index/indexStyled'
export class Swiper extends Component {
  state={
    data:['1','2','3'],
    imgHeight:176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1', 
        'http://shihuo.hupucdn.com/appHome/201811/1200/843bce9c5e893f33ccb55e1e7acd61fd.jpg?imageView2/2/w/750/h/268/interlace/1', 
        'http://shihuo.hupucdn.com/appHome/201812/1023/736a64832b272c088c9fe01837b0ac4e.jpg?imageView2/2/w/750/h/268/interlace/1',
        'http://shihuo.hupucdn.com/appHome/201812/0900/d31d0002502c7181c272e5bac796375e.jpg?imageView2/2/w/750/h/268/interlace/1',
        'http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1'
      ],
      });
    }, 100);
  }
  render() {
    return (
      <SwiperWrap>
        <WingBlank style={{margin:0}}>
        <Carousel
          autoplay={false}
          infinite
          dotStyle={ 
           {
            "background": "rgba(255,255,255,.4)",
           }
          }
          dotActiveStyle	={
            {
              "background":'#fff'
            }
          }
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
               href="http://localhost:3000"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <div className="guang-gao">广告</div>
      </SwiperWrap>
    );
  }
}

export default Swiper;
