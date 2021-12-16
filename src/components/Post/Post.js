import React from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom/cjs/react-router-dom.min";

const Post = (props) => {
  const {title, id} = props.post;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/post/${id}`);
  };
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/post/${id}`}>Post Details</Link>
      <br />
      <button onClick={handleClick}>habiba meri jan</button>
    </div>
  );
};

export default Post;
