import React from "react";
import { Button, Card, Form, Input } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = React.useState([]);
  React.useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      });
  }, []);
  const [addFriend, setAddFriend] = React.useState({
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  });
  const handleChange = (e) => {
    const newFriend = {
      ...addFriend,
      [e.target.name]: e.target.value,
    };
    setAddFriend(newFriend);
  };
  const handleSubmit = (e) => {
    axiosWithAuth()
      .post("/api/friends", addFriend)
      .then((res) => {
        console.log(res);
      });
  };
  const bye = (e) => {
    axiosWithAuth()
      .delete(`/api/friends/${e.value}`)
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      });
  };
  return (
    <div>
      <h1>Friends</h1>
      <div>
        <h3>Add Friend</h3>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="name"
            name="name"
            id="usernameInputLogin"
            value={addFriend.name}
            onChange={handleChange}
          ></Input>
          <Input
            type="text"
            placeholder="age"
            name="age"
            id="usernameInputLogin"
            value={addFriend.age}
            onChange={handleChange}
          ></Input>
          <Input
            type="text"
            placeholder="email"
            name="email"
            value={addFriend.email}
            onChange={handleChange}
          ></Input>
          <Button>Add</Button>
        </Form>
      </div>
      {friends.map((e) => (
        <Card key={e.id}>
          <h2>{e.name}</h2>
          <h3>age: {e.age}</h3>
          <h3>email: {e.email}</h3>
          <Button value={e.id} onClick={bye}>
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Friends;
