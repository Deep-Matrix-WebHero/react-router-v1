import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";

import "./FriendDetails.css";

const FriendDetails = () => {
  const {friendID} = useParams();
  const [friend, setFriend] = useState({});
  const history = useHistory();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  const handleClick = () => {
    history.push("/friends");
  };

  const style = {
    border: "3px solid goldenrod",
    padding: "10px",
    borderRadius: "10px",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridGap: "10px",
  };

  return (
    <div style={style} className="FriendDetails-container">
      <h2>FriendDetails of :{friendID} </h2>
      <h2>{friend.name}</h2>
      <h3>{friend.email}</h3>
      {/* optional chaining use */}
      <h5>City name: {friend.address?.city}</h5>
      {/* button use by using handler & history from documentation */}
      {/* <button onClick={handleClick}>See All friends</button> */}
      <Button variant="outline-danger" onClick={handleClick}>
        See All friends
      </Button>
    </div>
  );
};

export default FriendDetails;
