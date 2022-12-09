import React, { useContext, useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user_context";

export default function Wineries() {
  const [wineries_list, setWineriesList] = useState([]);
  const {currentUser} = useContext(UserContext)
  useEffect(() => {
    fetch("http://localhost:3000/wineries", {
      method: "GET",
      headers: {
        Authorization: currentUser.id,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setWineriesList(responseData);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <div className="w-75 mx-auto py-3">
      <Link to="/create_winery">
        <Button className="btn btn-primary">Create Winery</Button>
      </Link>

      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {wineries_list
            ? wineries_list.map((data) => {
                return (
                  <Table.Row key={data.id} className='p-2'>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell className="text-end">
                      <Link to={`/wineries/${data.id}`} className='btn btn-sm btn-primary'>Show Winery</Link>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            : "Loading..."}
        </Table.Body>
      </Table>
    </div>
  );
}
