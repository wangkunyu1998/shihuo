import React, { Component } from 'react';
import TopBar from './TopBar'
import SearchSelect from './SearchSelect'
import PageContent from './PageContent'
import {SearchPageWrap} from './SearchPageW'
// import {get} from '../../utils/http'
export class SearchPage extends Component {
 
  render() {
    return (
      <SearchPageWrap>
       <TopBar {...this.props}></TopBar>
       <SearchSelect></SearchSelect>
       <PageContent></PageContent>
      </SearchPageWrap>
    );
  }
}

export default SearchPage;
