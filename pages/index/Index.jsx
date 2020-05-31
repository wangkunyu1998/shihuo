import React, { Component } from 'react';
import {IndexWrap} from './indexStyled'
import SearchHeader from './SearchHeader'
import Swiper from './Swiper'
import Zone from './Zone';
import Hot from './Hot'
import HotActivity from './HotActivity'
import ListView from './ListView'

export class Index extends Component {

  render() {
    return (
    <IndexWrap>
    <SearchHeader {...this.props}></SearchHeader>
    <Swiper></Swiper>
    <Zone></Zone>
    <Hot></Hot>
    <HotActivity></HotActivity>
    <ListView></ListView>
    </IndexWrap>
    );
  }
}

export default Index;
