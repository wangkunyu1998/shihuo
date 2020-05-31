import React, { Component } from 'react';
import {Temaiwrap} from './discountStyled'
export class Temai extends Component {
  state={
    entranceList:[
      {img:'http://shihuo.hupucdn.com/appHome/201711/0113/705803887a16991348788bc77ef96298.png',name:'运动'},
      {img:'http://shihuo.hupucdn.com/appHome/201711/0113/ed229a3887b997986de9d2fa99968f2c.png',name:'休闲'},
      {img:'http://shihuo.hupucdn.com/appHome/201711/0113/3be9bb6590b50ae4c2c823353ebd1bb9.png',name:'户外'},
      {img:'http://shihuo.hupucdn.com/appHome/201711/0113/26a9c61773702db21dbe4b9d9a5bed60.png',name:'数码'},
      {img:'http://shihuo.hupucdn.com/appHome/201711/0113/487a7ff8df880418d15d3db5e4608a0f.png',name:'更多'},
    ],
    brandList:[
      {
        img:'http://shihuo.hupucdn.com/appHome/201801/0811/8b50d3b1734f11c83f911a361c96d1b9.jpg',
        logo:'http://shihuo.hupucdn.com/goods/style/201708/1716/a8418a3ae650e7c5c76eea45f2a2bcc1.png',
        tit:'日高',
        sub:"定金50抵450",
      },
      {
        img:'http://shihuo.hupucdn.com/appHome/201801/0612/71cd68692b56ab4bd992716e2c010270.jpg',
        logo:'http://shihuo.hupucdn.com/goods/style/201708/1716/4ef177124aa7ba5eb5d6ef5c135ae057.png',
        tit:'匹克',
        sub:"不止5折",
      },
      {
        img:'http://shihuo.hupucdn.com/appHome/201801/0612/ecbb92938c6c2e81bf6d4825f82b5fd9.jpg',
        logo:'http://shihuo.hupucdn.com/newslogo/201710/1814/cd232408542a3bafc7eb464f74909171.jpg',
        tit:'dickies',
        sub:"满11减10元",
      },
      {
        img:'http://shihuo.hupucdn.com/appHome/201801/0811/8f97c03a7fd2604d27568b087b8b5b59.jpg',
        logo:'http://shihuo.hupucdn.com/goods/style/201708/1716/6c79a6f7612a56c851451ca0f0929025.png',
        tit:'铭瑄',
        sub:"虎扑专享满600减180",
      },
      {
        img:'http://shihuo.hupucdn.com/appHome/201801/0811/985b1e7d8fc8eddc2a80c2b8b309ac2d.jpg',
        logo:'http://shihuo.hupucdn.com/goods/style/201708/1716/bf41e50f5ace374682d8f9e104a9a953.png',
        tit:'UA',
        sub:"虎扑专享满600减180",
      },
      {
        img:'http://shihuo.hupucdn.com/appHome/201801/0612/6751d06bc35a2e370f97982491bde549.jpg',
        logo:'http://shihuo.hupucdn.com/newslogo/201710/2312/e08733467eb951d4ff57debfbf97396e.jpg',
        tit:'Sony索尼',
        sub:"满48减10",
      },
    ]
  }
  render() {
    return (
      <Temaiwrap>
           
           <div className="tit">
             <h2>品牌特卖</h2>
             <p><span>更多品牌</span>
             <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png" alt=""/>
             </p>
             
           </div>
           <ul className="entrance-list">
           {
           this.state.entranceList.map((value,index)=>{
             return(
               <li key={index}>
               <img src={value.img} alt=""/>
             <span>{value.name}</span>
             </li>
             )
           })
         }
           </ul>
           <ul className="brand-list">
             {
               this.state.brandList.map((value,index)=>{
                 return(
               <li key={index}>
                 <img src={value.img} alt=""/>
                <div className="brand-cont"> 
                <div> <img src={value.logo} alt=""/></div>
               <p className="bread-name">{value.tit}</p>
               <p className="bread-sub">{value.sub}</p>
                </div>
               </li>
                 )
               })
             }
               
           </ul>
      
      </Temaiwrap>
    );
  }
}

export default Temai;
