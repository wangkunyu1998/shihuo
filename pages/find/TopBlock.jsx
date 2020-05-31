import React, { Component } from 'react';
import {TopWrap} from './findStyled'
import BScroll from 'better-scroll'
export class TopBlock extends Component {
  state={
    topList:[
      {name:'今日推荐',type:283},
      {name:'篮球',type:347},
      {name:'视频',type:281},
      {name:'最新资讯',type:270},
      {name:'潮流风向',type:318},
      {name:'3C新奇特',type:273},
      {name:'潮鞋志',type:285},
      {name:'球鞋90秒',type:136},
    ],
    topActive:'今日推荐'
  }
  componentDidMount(){
    new BScroll('.TopWrap-container',{
      scrollX:true,
      scrollY:false,
      click:true
    })
  }
  topActive2=(value)=>()=>{
    this.setState({
      topActive:value.name
    })
   this.props.listType(value.type)
  }
  render() {
    return (
      <TopWrap>
        <div className="TopWrap-container">
            <ul>
              {
                this.state.topList.map((value,index)=>{
                  return(
                  <li key={index} onClick={this.topActive2(value)} className={value.name === this.state.topActive?'top-active':''} >{value.name}</li>
                  )
                })
              }
            </ul>
        </div>
      </TopWrap>
    );
  }
}

export default TopBlock;
