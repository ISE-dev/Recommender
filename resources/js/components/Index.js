import React from 'react';
import ReactDom from 'react-dom';
import style from "../../css/style.css";

function Header() {
  return (<header>
    <div class="header">
      <div class="header-left">
        <h1 class="title">App title</h1>
      </div>

      <div class="header-right">
        <a href="#" class="signup link">新規登録</a><a href="#" class="login link">ログイン</a>
      </div>

      <div class="header-form">
        <input type="search" placeholder="キーワードを入力" />
      </div>

      
    </div>
  </header>);
}

function Message() {
  return (
    <h1 class="announce">
      recent post
    </h1>
  );
}

function Display() {
  var items = ["a","b","c","d","e"]
  return (
    <div class="content">
      <ul>
        {Object.keys(items).map(key => (
          <div class="RecommendedItem">
            <h1>
              {items[key]}
            </h1>
            <h5>・おすすめの理由</h5>
            <p>おすすめおすすめおすすめおすすめおすすめおすすめおすすめ
              おすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめ
              おすすめおすすめおすすめおすすめおすすめおすすめおすすめ
              おすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめ
              おすすめおすすめおすすめおすすめおすすめおすすめおすすめ
              おすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめ
              おすすめおすすめおすすめおすすめおすすめおすすめおすすめ
              おすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめおすすめ</p>
          </div>
        ))}
      </ul>
    </div>
  );
  
}


function App() {
  return (
    <div>
      <Header />
      <Message />
      <Display />
    </div>
  );
}


if (document.getElementById('app')) {
  ReactDom.render(<App />, document.getElementById('app'));
}
