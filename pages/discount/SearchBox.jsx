import React, { Component } from 'react';
import {Searchwrap} from './discountStyled'
export class SearchBox extends Component {
  render() {
    return (
  <Searchwrap>
      <div className="search">
      搜索全网低价好券
      </div>
  </Searchwrap>
    );
  }
}

export default SearchBox;
