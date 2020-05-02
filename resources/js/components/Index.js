import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import ReactDom from 'react-dom';
import axios from "axios";
import index_style from "../../css/index.css";
import home_style from "../../css/home.css";
import detail_style from "../../css/detail.css";
import post_stype from "../../css/post-design.css";
import {Header, RecentMessage, RecentPost, GoTop} from "./Home";
import {DetailContent, DetailMessage} from "./showDetail";
import {ToPostLink, NewPost} from "./Post";


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {window.innerWidth>780 &&(<GoTop />)}
        <ToPostLink />
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
              <RecentMessage />
              <RecentPost />
            </Route>
          </Switch>
        </BrowserRouter>
        {window.innerWidth<=780 &&(<GoTop />)}
      </div>
    );
  }
}

if (document.getElementById('app')) {
  ReactDom.render(<App />, document.getElementById('app'));
}