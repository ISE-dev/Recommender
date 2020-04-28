import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import ReactDom from 'react-dom';
import axios from "axios";
import style from "../../css/index.css";
import {Header, RecentMessage, RecentPost, GoTop} from "./Home";
import {DetailContent, DetailMessage} from "./showDetail";
import  {HashLink} from "react-router-hash-link";



class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/detail">
              <DetailMessage />
              <DetailContent />
            </Route>
            <Route path="/">
              <RecentMessage />
              <RecentPost />
            </Route>
          </Switch>
        </BrowserRouter>
        <GoTop />
      </div>
    );
  }
}

  ReactDom.render(<App />, document.getElementById('app'));
