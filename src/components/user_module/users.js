import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios';

export default function Users() {
  const [users_list, setUsersList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/users`)
      .then((response) => {
        setUsersList(response.data);
      })
    }, [])
    
    return (
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users_list.map((data) => {
              return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.username}</Table.Cell>
              </Table.Row>
            )})}
          </Table.Body>
        </Table>
      </div>
    )
}
