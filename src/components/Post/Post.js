import React from "react";
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom/cjs/react-router-dom.min";

const Post = (props) => {
  const {title, id, body} = props.post;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/post/${id}`);
  };
  return (
    <div>
      {/* <h2>{title}</h2> */}
      {/* <Link to={`/post/${id}`}>Post Details</Link>
      <br />
      <button onClick={handleClick}>habiba meri jan</button> */}
      {/* button using react bootstrap */}
      {/* <Button variant="outline-secondary" onClick={handleClick}>
        Post Details
      </Button> */}

      {/* ---card--- */}
      <Col>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title>
              <h2>{title} </h2>
              <h2>{body} </h2>
              <h2>{id}</h2>
            </Card.Title>
          </Card.Body>
          <Button variant="outline-primary" onClick={handleClick}>
            Post Details
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default Post;
