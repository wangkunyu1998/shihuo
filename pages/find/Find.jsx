import React, { Component } from 'react';
import {FindWrap} from './findStyled'
import {get} from 'utils/http'
import Swiper from './Swiper'
import Block from './Block'
import HotBlock from './HotBlock'
import TopBlock from './TopBlock'
import JPlist   from './JPlist'
export class find extends Component {
  state={
    list:[]
  }
  listType= async(type)=>{
    let result = await get({
      url:`http://localhost:3000/api/find/mobileList?tag_id=${type}&param_str=`
    })
   this.setState({
     list:result.data
   })
  }
 async componentDidMount(){
    let result = await get({
      url:'http://localhost:3000/api/find/mobileList?tag_id=283&param_str='
    })
   this.setState({
     list:result.data
   })
  }
  render() {
    return (
      <FindWrap>
       <Swiper></Swiper>
       <Block></Block>
       <HotBlock></HotBlock>
       <TopBlock listType={this.listType}></TopBlock>
       <JPlist list={this.state.list}> </JPlist>
      </FindWrap>
    );
  }
}

export default find;
