import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateWinery() {
  const [winery_name, setWineryName] = useState('');
  const navigate = useNavigate();
  
  const createNewBottle = () => {
    axios.post(`http://localhost:3000/api/v1/wineries`, {
      winery_name
    })
    .then(() => {
      navigate(-1)
    });
  }

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' value={winery_name} onChange={(e) => setWineryName(e.target.value)}/>
        </Form.Field>
        
        <Button type='submit' onClick={createNewBottle}>Create</Button>
      </Form>
    </div>
  )
}
