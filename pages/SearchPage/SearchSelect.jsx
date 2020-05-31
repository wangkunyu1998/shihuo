import React, { Component } from 'react';
import {SelectWrap} from './SearchPageW'
export class SearchSelect extends Component {
  state={
    select:[
      {
        name:'全部'
      },
      {
        name:'商品'
      },
      {
        name:'优惠'
      },
      {
        name:'晒物'
      },
    ],
    selectActive:'全部'
  }
  selectActive=(value)=>()=>{
    this.setState({
      selectActive:value.name
    })
  }
  render() {
    
    return (
      <SelectWrap>
        <ul className="select-index">
          {
            this.state.select.map((value,index)=>{
              return(
              <li className={this.state.selectActive===value.name?'active':""} key={index} onClick={this.selectActive(value)}>{value.name}</li>
              )
            })
          }
        </ul>
      </SelectWrap>
    );
  }
}

export default SearchSelect;
