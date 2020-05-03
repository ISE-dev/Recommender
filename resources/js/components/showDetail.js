import React, { useEffect, useState } from 'react';
import detail_style from "../../css/detail.css";

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
    const data = posts[postId-1];
    // console.log("test")
    // console.log(postId);
    // console.log("test")
    var judge=false;
    var test={hoge:["test1","test2"]};
    if(data!=undefined){
        judge=true;
    }
    return (
        <div>
            {judge &&(
                <div>
                  <div>
                    <h3 className="detail_title">{data.title}</h3>    
                    <p className="eval">評価⭐︎</p>
                  </div>
                    <div className="content">
                      <div>
                      </div>
                    </div>
                      <div className="content">
                        <div className="item_image">
                          Image
                        </div>
                        <div className="item_detail_content">
                          <h1>{data.body}{data.body}{data.body}{data.body}</h1>
                        </div>
                        <h5>category: <h1>{data.category}</h1></h5>
                        {/* <h5>category:{test.hoge.map(text=><h1>{text}</h1>)}</h5> */}
                      </div>
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
          {/* <h1 className="announce">detail post</h1> */}
          <a href="#">
          <h5 className="contributor">contributor name</h5>
          <div className="contributor_icon_area">icon</div>
          </a>
        </div>
      );
    }
  }
