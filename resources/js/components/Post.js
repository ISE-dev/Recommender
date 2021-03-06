import React from 'react';
import ReactDom from 'react-dom';
import {Header} from "./Home.js";
import style from "../../css/post-design.css"

export class Registration extends React.Component {
    render() {
        return (
            <div className="registration">
                <Header />
                <div className="line"></div>
                <h2>投稿作成</h2>

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

                <div className="send-button">
                    <p><input class="hover" type="submit" value="送信"></input></p>
                </div>
            </div>
        );
    }
}
ReactDom.render(<Registration />, document.getElementById('app'));
