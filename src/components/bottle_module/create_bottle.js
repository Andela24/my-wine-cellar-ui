import React, { useState, useEffect, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user_context";

export default function CreateBottle() {
  const { currentUser } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [wineType, setWineType] = useState("");
  const [grapeVariety, setGrapeVariety] = useState("");
  const [vintage, setVintage] = useState("");
  const [winery_id, setWineryId] = useState("");
  const [options, setOption] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/wineries`, {
      method: "GET",
      headers: { Authorization: currentUser.id },
    })
      .then((response) => response.json())
      .then((responseData) => {
        let optionsData = responseData.map((item) => {
          return { label: item.name, value: item.id };
        });
        optionsData.unshift({ label: "Select Winery", value: null });
        setOption(optionsData);
      });
  }, []);

  const createNewBottle = () => {
    if (!winery_id) {
      console.log("winery id is empty")
      return;
    }
    fetch(`http://localhost:3000/bottles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: currentUser.id,
      },
      body: JSON.stringify({
        title: title,
        wineType: wineType,
        grapeVariety: grapeVariety,
        vintage: vintage,
        winery_id: winery_id,
        user_id: currentUser.id,
      }),
    }).then((res) => {
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

        <select onChange={(e) => setWineryId(e.target.value)} required>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        <Button type="submit" onClick={createNewBottle}>
          Create
        </Button>
      </Form>
    </div>
  );
}
