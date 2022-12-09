import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setCurrentUser = useContext(UserContext).setCurrentUser;

  const createNewUser = () => {
    fetch(`/signup`, {
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
        navigate("/me");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div>
      <h1 className="text-center my-1">Sign Up</h1>

      <Form className="create-form w-50 mx-auto p-4">
        <Form.Field className="my-3">
          <label>Username</label>
          <input
            placeholder="Username"
            value={username}
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>

        <Form.Field className="my-3">
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>

        <div className="text-center my-1">
          <Button type="submit" className="btn btn-primary" onClick={createNewUser}>
            Sign up
          </Button>
        </div>
      </Form>
    </div>
  );
}
