import React from "react";
import { InputGroup, FormControl, Form } from "react-bootstrap";

const Search = ({ onSubmit, onChange }) => {
  return (
    <>
      {/* Accepts Input from the user to search for an anime*/}
      <Form onSubmit={onSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
          <FormControl
            placeholder="Anime Name"
            aria-label="Anime Name"
            aria-describedby="basic-addon1"
            onChange={onChange}
          />
        </InputGroup>
      </Form>
    </>
  );
};

export default Search;
