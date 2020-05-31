import React, { Component } from 'react';
import {SearchWrap} from './indexStyled'
export class SearchHeader extends Component {
  goSearch=()=>{
    this.props.history.push('/Layout/search')
  }
  render() {
    return (
      <SearchWrap >
        <div className="search" onClick={this.goSearch} id="top">
          搜索商品,品牌
        </div>
        <div className="me">
          <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png" alt=""/>
        </div>
      </SearchWrap>
    );
  }
}

export default SearchHeader;
