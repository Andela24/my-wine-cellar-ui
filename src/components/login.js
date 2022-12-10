import React, { useState, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setCurrentUser} = useContext(UserContext);
  const loginUser = () => {
    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((responseData) => {
        setCurrentUser(responseData);
        navigate("/");
      })
      .catch((e) => {
        window.alert(e.message);
      });
  };

  return (
    <div>
      <h1 className="text-center my-1">Login</h1>
      <Form className="create-form w-50 mx-auto p-4">
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="Username"
            value={username}
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>

        <div className="text-center my-2">
          <Button type="submit" className="btn btn-primary" onClick={loginUser}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}
