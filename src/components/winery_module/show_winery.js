import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Wineries() {
  const [users_list, setWineriesList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/wineries`)
      .then((response) => {
        setWineriesList(response.data);
      })
    }, [])
    
    return (
      <div>
        <Link to='/create_winery'>
          <Button>Create Winery</Button>
        </Link>

        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users_list.map((data) => {
              return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
              </Table.Row>
            )})}
          </Table.Body>
        </Table>
      </div>
    )
}
