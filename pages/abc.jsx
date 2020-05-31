import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Layout from './Layout'
import SearchPage from './SearchPage/SearchPage.jsx'
export class Abc extends Component {
  render() {
    return (
      <Router>
      <Route
    path="/Layout"
    component={Layout}
    ></Route>
    {/* <Layout ></Layout> */}
    <Route
    path="/SearchPage"
    component={SearchPage}
    ></Route>
     <Redirect from="/" to="/Layout/index"></Redirect>
    </Router>
    );
  }
}

export default Abc;
