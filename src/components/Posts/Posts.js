import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import Post from "../Post/Post";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {posts.map((post) => (
          <Post post={post}></Post>
        ))}
      </Row>
    </div>
  );
};

export default Posts;
