import React, { useContext, useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/user_context';

export default function ShowWinery() {
  const id = useParams()
  const [winery, setWinery] = useState();
  const {currentUser} = useContext(UserContext)

  const onDelete = (id) => {
    fetch(`http://localhost:3000/bottles/${id}`, {
      method: "DELETE",
      headers: { Authorization: currentUser.id },
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.message == "Deleted Successfully") {
          get_winery_data()
        } else {
          console.log("Error in deleting");
        }
      });
  };

  const get_winery_data = () => {
    fetch(`http://localhost:3000/wineries/${id}`,
    {
    	method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: currentUser.id,
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      setWinery(responseData)
    })
    .catch(error => console.warn(error));
  }

  useEffect(() => {
    get_winery_data()
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
            <Table.HeaderCell>vintage</Table.HeaderCell>
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
                    <Button >Show</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/update_bottle/${data.id}`}>
                    <Button >Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)} >Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      </div>
    )
}
