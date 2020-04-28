import React, { useEffect, useState } from 'react';

  export class DetailContent extends React.Component {
    render() {
      return (
        <div>
          <Post />
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

    // 正規表現によりurlの一番後ろのIDの取り出し
    var thisUrl = location.href;
    var postId = thisUrl.match(/([^\/.]+)/g);
    postId = postId[postId.length-1]//ここにidが入る
    // console.log(postId)
    const data = posts[postId];
    console.log("test")
    console.log(data);
    console.log("test")
    var judge=false;
    if(data!=undefined){
        judge=true;
    }

    return (
        <div className="content">
            {judge &&(
                <div>
                    <h1>{data.title}</h1>
                    <h1>{data.body}</h1>
                    <h1>{data.category}</h1>
                </div>
            )}
            {!judge &&(
                <div>
                    <h1>少しお待ちください</h1>
                </div>
            )}
         </div>
    );
  }



  export class DetailMessage extends React.Component{
    render(){
      return (
        <div>
          <h1 className="announce">detail post</h1>
        </div>
      );
    }
  }
