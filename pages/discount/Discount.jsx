import React, { Component } from 'react';
import SearchBox from './SearchBox'
import Yhq from './Yhq';
import Temai from './Temai'
import Advert from './Advert'
import MenuList from './MenuList'
import ListView from './ListView'
import {Discountwrap} from './discountStyled'
import {get} from 'utils/http'
import BScroll from 'better-scroll'
export class Discount extends Component {
  state={
    list:[],
    type:999,
    r:'',
    page:1,
    page_size: 30,
    publish_date: '',
    isLoad:true,
    suctionTop:false
  }
  ListType=async (type=999)=>{
    await this.setState({
      type
    })
    let result =await get({
      url:'http://localhost:3000/api/youhui/list?',
      params:{
        r: type,
        page:this.state.page,
        page_size:this.state.page_size,
        publish_date:this.state.publish_date,
      }
    })
   this.setState({
     list:result.data
   })
  }
  componentDidMount(){
    let bScroll = new BScroll('#Scroll',{
      click:true,
      pullUpLoad:true,
      bounce:{
        top:false,
      }
    })
    bScroll.on('pullingUp',async()=>{
      await this.setState({
        page:this.state.page+1
      })
      let result =await get({
        url:'http://localhost:3000/api/youhui/list?',
        params:{
          r:this.state.type,
          page:this.state.page,
          page_size:this.state.page_size,
          publish_date:this.state.publish_date,
        }
      })
      if(result.data.length !== 0){
        await this.setState({
          list:[
            ...this.state.list,
            ...result.data,
          ],
          isLoad:true
        })
      }else{
        await this.setState({
          isLoad:false
        })
      }
      
       bScroll.refresh();
      bScroll.finishPullUp();
      
    })
  }
  render() {
    return (
      <Discountwrap id="Scroll">
      <div>
          <SearchBox></SearchBox>
          <Yhq></Yhq>
          <Temai></Temai>
          <Advert></Advert>
          <MenuList type={this.ListType}></MenuList>
          <ListView list={this.state.list} isLoad={this.state.isLoad}></ListView>
      </div>
      </Discountwrap>
    );
  }
}

export default Discount;
