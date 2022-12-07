import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const user_id = localStorage.getItem("user_id")
  
  const loginUser = () => {

    fetch(`http://localhost:3000/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    .then((response) => response.json())
    .then((responseData) => {
      let abc = responseData.id
      if (responseData.id != undefined) {
        localStorage.setItem('user_id', abc)
        navigate('/')
      } else {
        console.log('error in login')
        navigate('/login')
      }
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
        
        <Button type='submit' onClick={loginUser}>Login</Button>
      </Form>
    </div>
  )
}
