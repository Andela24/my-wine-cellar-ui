import React, { useState, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setCurrentUser = useContext(UserContext).setCurrentUser

  const loginUser = () => {
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("HTTP status " + response.status);
        } 
        return response.json();
      })
      .then((responseData) => {
        setCurrentUser(responseData)
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>

        <Button type="submit" onClick={loginUser}>
          Login
        </Button>
      </Form>
    </div>
  );
}
