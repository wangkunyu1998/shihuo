import React, { Component } from 'react';
import {BlockWrap} from './findStyled'
export class Block extends Component {
  state={
   blockList: [
    {
      img:'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png',
      name:'公测'
    },
    {
      img:'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png',
      name:'栏目'
    },
    {
      img:'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png',
      name:'最新'
    },
    {
      img:'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png',
      name:'最热'
    },
   ]
  }
  render() {
    return (
      <BlockWrap>
       <ul>
         {
           this.state.blockList.map((value,index)=>{
            return(
              <li key={index}>
                <div>
                  <img src={value.img} alt=""/>
                </div>
                  <span>{value.name}</span>
              </li>
            )
           })
         }
         
        
       </ul>
      </BlockWrap>
    );
  }
}

export default Block;
