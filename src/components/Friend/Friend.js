import React from "react";
import {Button, Card, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

const Friend = (props) => {
  const {name, website, email, phone, address, id} = props.friend;
  const history = useHistory();
  // const style = {
  //   border: "3px solid goldenrod",
  //   padding: "10px",
  //   borderRadius: "10px",
  // };
  const url = `/friend/${id}`;
  const clickHandler = () => {
    history.push(url);
    // history.push(`/friend/${id}`);
  };

  return (
    // <div style={style}>
    //   <h1>ID: {id}</h1>
    //   <h2>my name is:{name} </h2>
    //   <h5>call me {phone}</h5>
    //   <h4>visit my website : {website}</h4>
    //   <h6>contact me via email: {email}</h6>
    //   <h5>City name: {address.city}</h5>
    //   <Link to={url}>Details</Link>
    //   <br />
    //   <Link to={url}>
    //     <button>Visit me</button>
    //   </Link>
    //   <br />
    //   {/* <button onClick={clickHandler}>Visit me</button> */}
    //   <Button variant="outline-success" onClick={clickHandler}>
    //     Visit me
    //   </Button>
    // </div>
    <Col>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>
            <h2>my name is:{name} </h2>
          </Card.Title>
          <Card.Text>
            <h5>City name: {address.city}</h5>
          </Card.Text>
          <Card.Text>
            <h5>{website}</h5>
          </Card.Text>
        </Card.Body>
        <Button variant="outline-success" onClick={clickHandler}>
          Visit me
        </Button>
      </Card>
    </Col>
  );
};

export default Friend;
