import React, { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { addAnimal } from "../firebase/zooFunctions";

export default function AddAnimal() {
  function submitData(event) {
    event.preventDefault();
    if (name === "" || imgUrl === "" || type === "" || numberOfLegs < 0) {
      let arr = [];
      setValidInputs(false);

      if (imgUrl === "") {
        arr.push("Name");
      }
      if (imgUrl === "") {
        arr.push("Image Url");
      }
      if (type === "") {
        arr.push("Type");
      }
      if (numberOfLegs < 0) {
        arr.push("Number Of Legs");
      }
      setInValidInputs(arr);

      return;
    }

    setValidInputs(true);
    let animal = {
      name: name,
      imgUrl: imgUrl,
      type: type,
      inIsrael: inIsrael,
      numberOfLegs: numberOfLegs,
    };
    clearFields();
    addAnimal(animal);
  }

  function clearFields() {
    setName("");
    setImgUrl("");
    setType("");
    setInIsrael(false);
    setNumberOfLegs(0);
  }

  const [validInputs, setValidInputs] = useState(true);
  const [inValidInputs, setInValidInputs] = useState([]);

  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [type, setType] = useState("");
  const [inIsrael, setInIsrael] = useState(false);
  const [numberOfLegs, setNumberOfLegs] = useState(0);

  return (
    <Form onSubmit={submitData} style={{ margin: "15px" }}>
      {!validInputs && (
        <Alert variant="danger">
          The Fields:{" "}
          {inValidInputs.map((i) => (
            <span style={{ color: "red" }} key={i}>
              {i + ", "}
            </span>
          ))}{" "}
          are invalid
        </Alert>
      )}
      <Row xs={1} lg={2} className="g-3">
        <Col>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: 25 }}>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Animal Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: 25 }} >Image Url:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Animal Image Url"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: 25 }} >Number Of legs:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Animal Number Of legs"
              value={numberOfLegs}
              onChange={(e) => setNumberOfLegs(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: 25 }} >Type:</Form.Label>
            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value={""} disabled="disabled">
                press to choose
              </option>
              <option value={"air"}>Air</option>
              <option value={"sea"}>Sea</option>
              <option value={"land"}>Land</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col style={{ fontSize: 25 }}>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="In Israel:"
              value={inIsrael}
              onChange={(e) => setInIsrael(e.target.checked)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button
          type="submit"
          style={{ maxWidth: "300px", fontSize: 25, backgroundColor: "#5ec3e9", borderColor: "#5ec3e9" }}
        >
          SUBMIT
        </Button>
      </Row>
    </Form>
  );
}
