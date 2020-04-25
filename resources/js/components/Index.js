import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import axios from "axios";
import style from "../../css/index.css";
import {Header, Message, Content, GoTop} from "./Home";



class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Message />
        <Content />
        <GoTop />
      </div>
    );
  }
}

  ReactDom.render(<App />, document.getElementById('app'));
