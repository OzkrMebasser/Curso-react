import React from "react";
import {
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";
const MovieForm = ({ setMovieData, movieData, handleSearch }) => {
  return (
    <Form
      style={{
        margin: "auto",
        width: "50%",
        marginTop: 30,
        display: "flex",
        alignItems: "center"
      }}
      onSubmit={handleSearch}
    >
      <Row className="align-items-center">
        <Col xs="auto" style={{ marginTop: "7px" }}>
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Movie Name"
            onChange={e => setMovieData({ ...movieData, name: e.target.value })}
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={e => setMovieData({ ...movieData, type: e.target.value })}
          >
            <option>Open this select menu</option>
            <option value="movie">Movie</option>
            <option value="series">Serie</option>
          </Form.Select>
        </Col>

        <Col xs="auto" style={{ marginTop: "7px" }}>
          <Button type="submit" className="mb-2">
            Search !
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MovieForm;
