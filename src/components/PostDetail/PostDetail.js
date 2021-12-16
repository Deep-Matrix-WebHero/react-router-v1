import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
const PostDetail = () => {
  const {postID} = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h2>post details:{postID}</h2>
      <h4>{post.tittle}</h4>
      <h3>{post.body}</h3>
    </div>
  );
};

export default PostDetail;
