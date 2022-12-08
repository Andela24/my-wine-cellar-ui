import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/me/${localStorage.getItem('user_id')}`,
    {
    	method: "GET",
      headers: { 'Authorization': localStorage.getItem('user_id') }
    })
    .then((response) => response.json())
    .then((responseData) => {
      setUser(responseData)
    })
    .catch(error => console.warn(error));
    }, [])
    
    return (
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.username}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
}
