import React from "react";
import {
  CardTitle,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = React.useState({
    username: "",
    password: "",
  });
  const { username, password } = login;

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const submitLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);

        history.push(`/friends`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Card className="loginCard">
        <CardTitle>Login</CardTitle>
        <Form onSubmit={submitLogin}>
          <FormGroup>
            <Label for="usernameinputlogin">Username</Label>
            <Input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
              id="usernameInputLogin"
            />
          </FormGroup>
          <FormGroup>
            <Label for="passwordInputLogin">Password</Label>
            <Input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={password}
              id="passwordInputLogin"
            />
          </FormGroup>
          <Button>Login</Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
