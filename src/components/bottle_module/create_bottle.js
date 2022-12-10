import React, { useState, useEffect, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user_context";
import { Link } from "react-router-dom";

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
    fetch(`/wineries`, {
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
      window.alert("winery id is empty");
      return;
    }
    fetch(`/bottles`, {
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
    })
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((responseData) => {
        navigate(-1);
      })
      .catch((e) => {
        window.alert(e.message);
      });
  };

  return (
    <div>
      <Form className="create-form w-50 mx-auto">
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </Form.Field>

        <Form.Field>
          <label>Wine Type</label>
          <input
            placeholder="Wine Type"
            value={wineType}
            onChange={(e) => setWineType(e.target.value)}
            className="form-control"
          />
        </Form.Field>

        <Form.Field>
          <label>Grape Variety</label>
          <input
            placeholder="Grape variety"
            value={grapeVariety}
            onChange={(e) => setGrapeVariety(e.target.value)}
            className="form-control"
          />
        </Form.Field>

        <Form.Field>
          <label>Vintage</label>
          <input
            placeholder="Vintage"
            value={vintage}
            onChange={(e) => setVintage(e.target.value)}
            className="form-control"
          />
        </Form.Field>

        <select
          onChange={(e) => setWineryId(e.target.value)}
          required
          className="form-control my-2"
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="text-center my-4">
          <Button
            type="submit"
            onClick={createNewBottle}
            className="btn btn-success w-50"
          >
            Create Bottle
          </Button>
        </div>

        <div>
          <span>Don't see your winery name? Create your: </span>{" "}
          <Link to="/create_winery">
            <Button className="btn btn-primary btn-sm">Create Winery</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
