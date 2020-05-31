import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import {Searchwrap,SearchBorder} from './componentStyled'
import {get} from 'utils/http'
export class Search extends Component {
  state = {
    value: '',
    animation:false,
    searchList:[],
    hotList:[]
  };
 async componentDidMount() {
    let result = await get({
      url:'http://localhost:3000/api/search/hotSearch'
    })
    this.setState({ 
      hotList:result.data
    })
  }
  onChange= async(value) => {
await this.setState({ value })
  let result = await get({
    url:'http://localhost:3000/api/search/relatedKeywords?',
    params:{
      keywords:this.state.value
    }
  })
  this.setState({
    searchList:result.data
  })
  };
  clear = () => {
    this.setState({ value: '' });
  };
  onFocus=()=>()=>{
     this.setState({
      animation:false
     })
  }
  onCancel=()=>{
   this.props.history.goBack()
  }
  searchClick=({name})=>()=>{
    console.log(name)
  }
  jump=(value)=>()=>{
    console.log(this.props.history)
    this.props.history.push({
      pathname:'/SearchPage',
      state:{
        name:value
      }
    })
  }
  render() {
    return (
      <Searchwrap>
       <SearchBar
        placeholder="搜索商品，品牌"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onBlur={() => console.log('onBlur')}
        onCancel={this.onCancel}
        onFocus={this.onFocus()}
        showCancelButton
        onChange={this.onChange}
      />
     
      {
        this.state.searchList.length>0 ? (
          <div className="searchList">
          {
            this.state.searchList.map((value,index)=>{
             return(
             <SearchBorder
             width="0 0 1px 0"
             color="#e6e6e6"
             key={index}
             onClick={this.jump(value)}
             >{value}</SearchBorder>
             )
            })
          }
         </div>
        ):(
          <div className="searchWrapper">
          <dl>
            <dt>热门搜索</dt>
            <dd>
             {
               this.state.hotList.map((value,index)=>{
                return(
                <span key={index} onClick={this.searchClick(value)}>{value.name}</span>
                )
               })
             }
            </dd>
          </dl>
          <dl>
            <dt>历史搜索</dt>
            <dd>
            <span>耐克</span>
            </dd>
            <dd>
           <p>清空历史记录</p>
            </dd>
          </dl>
        </div>
        )
      }
     
      </Searchwrap>
    );
  }
}

export default Search;
