import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const createNewUser = () => {

    fetch(`http://localhost:3000/api/v1/signup`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        id: localStorage.getItem('user_id')
      }),
    })
    .then((response) => response.json())
    .then((responseData) => {
      let abc = responseData.id
      localStorage.setItem('user_id', abc);
      navigate('/me')
    })
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
          <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Field>
        
        <Button type='submit' onClick={createNewUser}>Sign up</Button>
      </Form>
    </div>
  )
}
