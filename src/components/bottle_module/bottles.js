import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios';

export default function Bottles() {
  const [users_list, setBottlesList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/bottles`)
      .then((response) => {
        setBottlesList(response.data['bottles']);
      })
    }, [])
    
    return (
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Wine type</Table.HeaderCell>
              <Table.HeaderCell>Grape Variety</Table.HeaderCell>
              <Table.HeaderCell>vintage</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users_list.map((data) => {
              return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.wine_type}</Table.Cell>
                <Table.Cell>{data.grape_variety}</Table.Cell>
                <Table.Cell>{data.vintage}</Table.Cell>
                
              </Table.Row>
            )})}
          </Table.Body>
        </Table>
      </div>
    )
}
