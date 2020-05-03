import React, { useEffect, useState } from 'react';
import index_style from "../../css/index.css"

export class RecentMessage extends React.Component{
    render(){
      return (
        <div>
          <h1 className="announce">recent post</h1>
        </div>
      );
    }
  }

export class RecentPost extends React.Component {
  render() {
    return (
      <div>
        <Post />
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

function Post(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
  }, [])
  const getPosts = async () => {
    const res = await axios.get('/api/');
    setPosts(res.data.post);
  }
    return (
    <div className="content">
      {posts.map((post) =>
        <div className="RecommendedItem ">
          <a href={"/detail/id/"+post.id} className="content_zone">
          <h1 key="{post.id}">{post.title}</h1>
          <p key="{post.id}">category: {post.category}</p>
          <p key="{post.id}">投稿日: {post.created_at}</p>
          </a>
        </div>
       )}         
    </div>
  );
}
