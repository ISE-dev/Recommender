import React from 'react';
import ReactDom from 'react-dom';

import style from "../../css/index.css";



function Header() {
  return (<header id="top">
    <div class="header">
      <div class="header-left">
        <h1 class="title">App title</h1>
      </div>

      <div class="header-right">
        <a href="#" class="signup link">新規登録</a><a href="#" class="login link">ログイン</a>
      </div>

      <div class="header-form">
        <form>
          <button> 🔍</button>
          <input type="search" placeholder="キーワードを入力"></input>        
        </form>
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

function GoTop() {
  return (
    <nav>
      <a href="#top" class="go-top">&and;</a>  
    </nav>
    
  )
}





function Content() {
  var items = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"]
  return (
    <div class="content">
      {Object.keys(items).map(key => (
          <div class="RecommendedItem">
            <h1>
              記事　{items[key]}
            </h1>
            <h5>・おすすめ</h5>
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
    </div>
  );
  
}


function App() {
  return (
    <div>
      <Header />
      <Message />
      <Content />
      <GoTop />
    </div>
  );
}


if (document.getElementById('app')) {
  ReactDom.render(<App />, document.getElementById('app'));
}
