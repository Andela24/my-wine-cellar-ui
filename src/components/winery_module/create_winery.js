import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user_context';

export default function CreateWinery() {
  const [wineryName, setWineryName] = useState('');
  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext)
  
  const createNewBottle = () => {
    
    fetch('http://localhost:3000/wineries',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': currentUser.id},
      body: JSON.stringify({
        winery_name: wineryName
      }),
    })
    .then(() => {
      navigate(-1)
    })
  }

  return (
    <div>
      <Form className="create-form w-50 mx-auto">
        <Form.Field className='my-2'>
          <label>Name</label>
          <input placeholder='Name' value={wineryName} className='form-control' onChange={(e) => setWineryName(e.target.value)}/>
        </Form.Field>
        <Button type='submit' onClick={createNewBottle} className='btn btn-light'>Create</Button>
      </Form>
    </div>
  )
}
