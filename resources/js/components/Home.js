import React from 'react';
import ReactDom from 'react-dom';


 export class Header extends React.Component {
    render() {
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
  }

  export class Message extends React.Component{
    render(){
      return (
        <div>
          <h1 class="announce">recent post</h1>
        </div>
      );
    }
  }
  

  export class Content extends React.Component {
    constructor(props){
      super(props);
      this.state=["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
    }
    render() {
      return (
        <div class="content">
                {Object.keys(this.state).map(key => (
            <div class="RecommendedItem">
              <h1>
                記事　{this.state[key]}
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
  }
  

 export class GoTop extends React.Component {
    render() {
      return (
        <div>
          <nav>
            <a href="#top" class="go-top" go top>&and;</a>  
          </nav>
        </div>
      );
    }
  }
  
