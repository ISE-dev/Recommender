import React from 'react';
import ReactDom from 'react-dom';


 export class Header extends React.Component {
    render() {
      return (<header id="top">
       <div className="header">
          <div className="header-left">
           <h1 className="title">App title</h1>
          </div>
  
         <div className="header-right">
           <a href="#" className="signup link">新規登録</a><a href="#" className="login link">ログイン</a>
         </div>
  
          <div className="header-form">
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
          <h1 className="announce">recent post</h1>
        </div>
      );
    }
  }
  

  export class Content extends React.Component {
    constructor(props){
      super(props);
      this.state={"items":["a","b","c","d","e","f","g","h","i"]};
    }
    render() {
      return (
        <div className="content">
                {Object.keys(this.state.items).map(key => (
            <div className="RecommendedItem">
              <h1>
                記事　{this.state.items[key]}
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
            <a href="#top" className="go_top">&and;</a>  
          </nav>
        </div>
      );
    }
  }
  