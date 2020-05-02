import React from 'react';


import header_style from "../../css/Header.css";

export class Header extends React.Component {
  displayArea(size) {
    var display=true;
    if(window.innerWidth>size){
      display=true;
    }else{
      display=false;
    }
    return display;
  }
  render() {
    return (<header id="top">
       <div className="header">
          <div className="header_left">
           <h1 className="title"><a href="/">App title</a></h1>
          </div>
         <div className="header_right">
           <a href="#" className="signup link">新規登録</a>
           <a href="#" className="login link">ログイン</a>
         </div>
          <div className="header_form">
           <form>
              <div className="search_area">
                {this.displayArea(400) &&(
              <button> 🔍</button>)}
              {this.displayArea(300) &&(
                <input type="search" placeholder="キーワードを入力"></input>
              )}
              </div>
           </form>
         </div>
       </div>
     </header>);
  }
}

