import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Control
            className="m-1"
            style={{
              width: "40rem",
            }}
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button className="m-1" variant="outline-primary" type="submit">
            Buscar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
