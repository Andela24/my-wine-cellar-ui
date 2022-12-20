import React, { useState, useEffect, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/user_context";
import { headers } from "../../Globals";

export default function UpdateBottle() {
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [wineType, setWineType] = useState("");
  const [grapeVariety, setGrapeVariety] = useState("");
  const [vintage, setVintage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/bottles/${id}`, {
      method: "GET",
      headers: headers
    })
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setWineType(data.wine_type);
        setVintage(data.vintage);
        setGrapeVariety(data.grape_variety);
      });
  }, []);

  const updateAPIData = () => {
    fetch(`/bottles/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        title: title,
        wineType: wineType,
        grapeVariety: grapeVariety,
        vintage: vintage,
      }),
    }).then(() => {
      navigate(-1);
    });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Wine Type</label>
          <input
            placeholder="Wine Type"
            value={wineType}
            onChange={(e) => setWineType(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Grape Variety</label>
          <input
            placeholder="Grape variety"
            value={grapeVariety}
            onChange={(e) => setGrapeVariety(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Vintage</label>
          <input
            placeholder="Vintage"
            value={vintage}
            onChange={(e) => setVintage(e.target.value)}
          />
        </Form.Field>

        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
