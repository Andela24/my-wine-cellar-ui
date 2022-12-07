import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"

export default function UpdateBottle() {
  const [id, setID] = useState(null);
  const [title, setTitle] = useState('');
  const [wineType, setWineType] = useState('');
  const [grapeVariety, setGrapeVariety] = useState('');
  const [vintage, setVintage] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setTitle(localStorage.getItem('Title'));
    setWineType(localStorage.getItem('Wine Type'));
    setGrapeVariety(localStorage.getItem('Grape Variety'))
    setVintage(localStorage.getItem('Vintage'))
  }, []);

  const updateAPIData = () => {
    fetch(`http://localhost:3000/api/v1/bottles/${id}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('user_id') },
      body: JSON.stringify({
        title: title,
        wineType: wineType,
        grapeVariety: grapeVariety,
        vintage: vintage
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
          <label>Title</label>
          <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Form.Field>

        <Form.Field>
          <label>Wine Type</label>
          <input placeholder='Wine Type' value={wineType} onChange={(e) => setWineType(e.target.value)}/>
        </Form.Field>
        
        <Form.Field>
          <label>Grape Variety</label>
          <input placeholder='Grape variety' value={grapeVariety} onChange={(e) => setGrapeVariety(e.target.value)}/>
        </Form.Field>
        
        <Form.Field>
          <label>Vintage</label>
          <input placeholder='Vintage' value={vintage} onChange={(e) => setVintage(e.target.value)}/>
        </Form.Field>
        
        <Button type='submit' onClick={updateAPIData}>Update</Button>
      </Form>
    </div>
  )
}
