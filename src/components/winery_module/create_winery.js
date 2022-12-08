import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

export default function CreateWinery() {
  const [winery_name, setWineryName] = useState('');
  const navigate = useNavigate();
  
  const createNewBottle = () => {
    fetch('http://localhost:3000/wineries',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('user_id') },
      body: JSON.stringify({
        winery_name: winery_name
      }),
    })
    .then(() => {
      navigate(-1)
    })
  }

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' value={winery_name} className='form-control' onChange={(e) => setWineryName(e.target.value)}/>
        </Form.Field>
        <Button type='submit' onClick={createNewBottle} className='btn btn-light'>Create</Button>
      </Form>
    </div>
  )
}
