import {Row} from "react-bootstrap";
import {useEffect, useState} from "react/cjs/react.development";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <div className="friends-length">
        <h2>hey! i have Friends:{friends.length} .</h2>
        <br />
      </div>
      <Row xs={1} md={3} className="g-4">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </Row>
      {/* <h2>hey! i have Friends:{friends.length} .</h2>
      <div className="friends-container">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div> */}
    </div>
  );
};

export default Friends;
