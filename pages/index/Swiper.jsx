import React, { Component } from 'react';
import {Carousel,WingBlank} from 'antd-mobile'
import {SwiperWrap} from './indexStyled'
export class Swiper extends Component {
  state={
    data:['1','2','3'],
    imgHeight:176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1', 
        'http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1', 
        'http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1',
        'http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1',
        'http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1'
      ],
      });
    }, 100);
  }
  render() {
    return (
      <SwiperWrap>
        <WingBlank style={{margin:0}}>
        <Carousel
          autoplay={true}
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
