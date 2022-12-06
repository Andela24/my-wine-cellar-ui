import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const loginUser = () => {
    axios.post(`http://localhost:3000/login`, {
      username,
      password
    })
    .then(() => {
      navigate('/users')
    });
  }

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Field>
        
        <Button type='submit' onClick={loginUser}>Login</Button>
      </Form>
    </div>
  )
}
