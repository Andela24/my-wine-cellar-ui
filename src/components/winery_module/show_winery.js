import React, { useContext, useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/user_context';
import { headers } from '../../Globals';

export default function ShowWinery() {
  const {id} = useParams()
  const [winery, setWinery] = useState();
  const { currentUser } = useContext(UserContext)

  const onDelete = (id) => {
    fetch(`/bottles/${id}`, {
      method: "DELETE",
      headers: headers
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.message == "Deleted Successfully") {
          getWineryData()
        } else {
          window.alert("Error in deleting");
        }
      });
  };

  const getWineryData = () => {
    fetch(`/wineries/${id}`,
    {
    	method: "GET",
      headers: headers
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    })
    .then((responseData) => {
      setWinery(responseData)
    })
    .catch(error => window.alert(error));
  }

  useEffect(() => {
    getWineryData()
    }, [])
    
    return (
      <div className='w-75 mx-auto'>

        <h1 className='text-center'>Winery: {winery?.name}</h1>
        <h6 className='text-muted'>Showing bottles of selected winery</h6>
        <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Wine type</Table.HeaderCell>
            <Table.HeaderCell>Grape Variety</Table.HeaderCell>
            <Table.HeaderCell>Vintage</Table.HeaderCell>
            <Table.HeaderCell>Show Bottle</Table.HeaderCell>
            <Table.HeaderCell>Update Bottle</Table.HeaderCell>
            <Table.HeaderCell>Delete Bottle</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {winery && winery.bottles.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.wine_type}</Table.Cell>
                <Table.Cell>{data.grape_variety}</Table.Cell>
                <Table.Cell>{data.vintage}</Table.Cell>
                <Table.Cell>
                  <Link to={`/wineries/${winery.id}/bottles/${data.id}`}>
                    <Button className="btn btn-primary">Show</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/update_bottle/${data.id}`}>
                    <Button className="btn btn-warning">Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)} className="btn btn-danger">Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      </div>
    )
}
