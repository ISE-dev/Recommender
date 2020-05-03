import React from 'react';
import ReactDom from 'react-dom';
import style from "../../css/post-design.css"

export class NewPost extends React.Component {
    render() {
        return (
            <div className="registration">
                <h2 className="new_post_title" >投稿作成</h2>

                <div className="name">
                    ・タイトル<br></br>
                    <input type="text" name="name"></input>
                </div>

                <div className="category">
                    ・カテゴリ<br></br>
                    <input type="text" name="name"></input>
                </div>

                <div className="introduce">
                    ・紹介文<br></br>
                    <textarea name="comment" cols="30" rows="5"></textarea>
                </div>

                <div className="sendArea">
                    <p><input className="submit_button" type="submit" value="送信"></input></p>
                </div>
            </div>
        );
    }
}



export class ToPostLink extends React.Component{
    render() {
      return (
        <h1><a href="/post">new post!</a></h1>
      )
    }
  }
  
