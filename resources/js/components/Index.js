import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import ReactDom from 'react-dom';

import home_style from "../../css/home.css";
import {RecentMessage, RecentPost, GoTop} from "./Home";
import {DetailContent, DetailMessage} from "./showDetail";
// import {ToPostLink, NewPost} from "./Post";
import {Header} from "./Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/post">
              <NewPost />
            </Route>
            <Route path="/detail">
              <div>
              <DetailMessage />
              </div>
              <DetailContent />
            </Route>

            <Route path="/">
              {window.innerWidth>780 &&(<GoTop />)}
              <RecentMessage />
              <RecentPost />
              {window.innerWidth<=780 &&(<GoTop />)}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

if (document.getElementById('app')) {
  ReactDom.render(<App />, document.getElementById('app'));
}