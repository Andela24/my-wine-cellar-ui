import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/user_context";
import Card from "react-bootstrap/Card";
import { Table } from "semantic-ui-react";
import { headers } from "../../Globals";

export default function ShowBottle() {
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [bottle, setBottle] = useState(null);

  useEffect(() => {
    fetch(`/bottles/${id}`, {
      method: "get",
      headers: headers
    })
      .then((res) => res.json())
      .then((resbottle) => {
        setBottle(resbottle);
      });
  }, []);
  
  return (
    <div className="d-flex justify-content-center py-5">
      {bottle && (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Table singleLine>
              <Table.Body>
                <Table.Row >
                  <Table.Cell><b>Title</b></Table.Cell>
                  <Table.Cell>{bottle.title}</Table.Cell>
                </Table.Row>
                <Table.Row >
                  <Table.Cell><b>Wine Type</b></Table.Cell>
                  <Table.Cell>{bottle.wine_type}</Table.Cell>
                </Table.Row>
                <Table.Row >
                  <Table.Cell><b>Grape Variety</b></Table.Cell>
                  <Table.Cell>{bottle.grape_variety}</Table.Cell>
                </Table.Row>
                <Table.Row >
                  <Table.Cell><b>Vintage</b></Table.Cell>
                  <Table.Cell>{bottle.vintage}</Table.Cell>
                </Table.Row>
                <Table.Row >
                  <Table.Cell><b>Wine Name: </b></Table.Cell>
                  <Table.Cell>{bottle.winery.name}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
