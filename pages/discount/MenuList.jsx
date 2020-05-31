import React, { Component } from 'react';
import {Menuwrap} from './discountStyled'
export class MenuList extends Component {
  state={
    menuList:[
      {name:'精选',type:999},
      {name:'鞋类',type:1},
      {name:'服饰',type:2},
      {name:'数码',type:3},
      {name:'兴趣',type:4},
    ],
    hotsearch:[
      {name:'AJ'},
      {name:'NIKE'},
      {name:'亚瑟士'},
      {name:'洗面奶'},
      {name:'Dickies'}, 
      {name:'李维斯'},
      {name:'新百伦'},
      {name:'PUMA'},
    ],
    activeName:'精选',
    isLayer:false
  }
  activeClick=(value)=>()=>{
      this.setState({
        activeName:value.name
      })
      this.props.type(value.type)
  }
  isShow=()=>{
    this.setState({
      isLayer:!this.state.isLayer
    })
  }
  render() {
    return (
      <Menuwrap id="tagTop">
        {
         this.state.isLayer?(
          <div className="ddd">
          <div className="menu-list-layer">
                <div className="tags-btn">
                  切换分类
                  <div onClick={this.isShow}><a href="#tagTop">&nbsp;</a></div>
                </div>
                <ul className="menu-list-layer2">
                {
                this.state.menuList.map((value,index)=>{
                  return(
                  <li key={index} className={this.state.activeName === value.name ? 'menu-active' : ''} onClick={this.activeClick(value)}>{value.name}</li>
                  )
                })
              }
                </ul>
                <div className="hotsearch">热门搜索</div>
                <ul className="hotsearchList">
                  {
                    this.state.hotsearch.map((value,index)=>{
                      return(
                      <li key={index}>{value.name}</li>
                      )
                    })
                  }
                </ul>
                <div className="mask" onClick={()=>{
                    this.setState({
                      isLayer:false
                    })
                }}>
                 
                  </div>
           </div>
           
          </div>
         ):(
              <ul className="menu-list">
            {
              this.state.menuList.map((value,index)=>{
                return(
                <li key={index} className={this.state.activeName === value.name ? 'menu-active' : ''} onClick={this.activeClick(value)}>{value.name}</li>
                )
              })
            }
            <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <div className="tag-btn" onClick={this.isShow}> <a href="#tagTop"> &nbsp;</a></div>
         </ul>
         )
        }
         
      
         
       
      </Menuwrap>
    );
  }
}

export default MenuList;
