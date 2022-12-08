import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Wineries() {
  const [wineries_list, setWineriesList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/wineries',
    {
    	method: "GET",
      headers: ({
        'Authorization': localStorage.getItem('user_id'),
      }),
      
    })
    .then((response) => response.json())
    .then((responseData) => {
      setWineriesList(responseData)
    })
    .catch(error => console.warn(error));
    }, [])
    
    return (
      <div>
        <Link to='/create_winery'>
          <Button className='btn btn-primary'>Create Winery</Button>
        </Link>

        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {wineries_list ? wineries_list.map((data) => {
              return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
              </Table.Row>
            )}) : 'Loading...'}
          </Table.Body>
        </Table>
      </div>
    )
}
