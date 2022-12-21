import React, { useContext, useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user_context";
import { headers } from "../../Globals";

export default function Bottles() {
  const [bottles_list, setBottlesList] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    fetch('/bottles')
      .then((response) => response.json())
      .then((responseData) => {
        setBottlesList(responseData);
      });
  }, [currentUser.id]);

  const onDelete = (id) => {
    fetch(`/bottles/${id}`, {
      method: "DELETE",
      headers: headers
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.message == "Deleted Successfully") {
          setBottlesList(bottles_list.filter((b) => b.id !== id));
        } else {
          window.alert("Error in deleting");
        }
      });
  };

  return (
    <div className="w-75 mx-auto p-3">
      <Link to="/create_bottle">
        <Button className="btn btn-success">Create Bottle</Button>
      </Link>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Winery Name</Table.HeaderCell>
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
          {bottles_list.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.winery.name}</Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.wine_type}</Table.Cell>
                <Table.Cell>{data.grape_variety}</Table.Cell>
                <Table.Cell>{data.vintage}</Table.Cell>
                <Table.Cell>
                  <Link to={`/wineries/${data.winery.id}/bottles/${data.id}`}>
                    <Button className="btn btn-primary">Show</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/update_bottle/${data.id}`}>
                    <Button className="btn btn-warning">Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => onDelete(data.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
