import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import axios from "axios";
import style from "../../css/index.css";
import {Header, Message, Content, GoTop} from "./Home";

// function User() {

//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     getPosts()
//   }, [])

//   const getPosts = async () => {
//     const res = await axios.get('/api/');
//     setPosts(res.data.post);
//   }
  
  
//   console.log(posts);

//   return (
//       <div>
//           <h1>post</h1>
//           <ul>
//               {/* {posts.map((post) => <li>{post}</li>)} */}
//           </ul>
//       </div>
//   );
// }


function User() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      getPosts()
    }, []);
    const getPosts = async () => {
      const res = await axios.get('/api/');
      setPosts(res.data.post);
    }
    return (
        <div>
            <h1>post</h1>
            <ul>
              {posts.map((post) => <li key="{post.id}">{post.title}</li>)}
              <p>~以下本文リスト
                {posts.map((post) => <li key="{post.id}">{post.body}</li>)}
              </p>
            </ul>
        </div>
    );
  }

class App extends React.Component {

  render() {
    return (
      <div>
        {/* <Header />
        <Message />
        <Content />
        <GoTop /> */}
        <hr/>
        <User />
        <hr/>
      </div>
    );
  }
}

  ReactDom.render(<App />, document.getElementById('app'));
