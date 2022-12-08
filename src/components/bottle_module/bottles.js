import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Bottles() {
  const [bottles_list, setBottlesList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/bottles`,
    {
    	method: "GET",
      headers: ({
        'Authorization': localStorage.getItem('user_id'),
      }),
    })
    .then((response) => response.json())
    .then((responseData) => {
      setBottlesList(responseData)
    })
  }, [])

    const setData = (data) => {
      let { id, title, wine_type, grape_variety, vintage } = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('Title', title);
      localStorage.setItem('Wine Type', wine_type);
      localStorage.setItem('Grape Variety', grape_variety)
      localStorage.setItem('Vintage', vintage)
    }

    const onDelete = (id) => {
      fetch(`http://localhost:3000/bottles/${id}`,
      {
        method: "DELETE",
        headers: {'Authorization': localStorage.getItem('user_id')}
      })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.message == 'Deleted Successfully'){
          setBottlesList(bottles_list.filter((b) =>  b.id !== id ))
        }
        else {
          console.log('Error in deleting')
        }
      })
    }
    
    return (
      <div>
        <Link to='/create_bottle'>
            <Button>Create Bottle</Button>
        </Link>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Wine type</Table.HeaderCell>
              <Table.HeaderCell>Grape Variety</Table.HeaderCell>
              <Table.HeaderCell>vintage</Table.HeaderCell>
              <Table.HeaderCell>Update Bottle</Table.HeaderCell>
              <Table.HeaderCell>Delete Bottle</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {bottles_list.map((data) => {
              return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.wine_type}</Table.Cell>
                <Table.Cell>{data.grape_variety}</Table.Cell>
                <Table.Cell>{data.vintage}</Table.Cell>
                <Table.Cell> 
                  <Link to='/update_bottle'>
                      <Button onClick={() => setData(data)}>Update</Button>
                  </Link>
                  </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )})}
          </Table.Body>
        </Table>
      </div>
    )
}
