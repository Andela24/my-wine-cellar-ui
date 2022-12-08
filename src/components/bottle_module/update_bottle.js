import React, { useState, useEffect, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/user_context";

export default function UpdateBottle() {
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [wineType, setWineType] = useState("");
  const [grapeVariety, setGrapeVariety] = useState("");
  const [vintage, setVintage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/bottles/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: currentUser.id,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        setTitle(resData.title);
        setWineType(resData.wine_type);
        setVintage(resData.vintage);
        setGrapeVariety(resData.grape_variety);
      });
  }, []);

  const updateAPIData = () => {
    fetch(`http://localhost:3000/bottles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: currentUser.id,
      },
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
