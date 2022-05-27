import React from "react";
import { InputGroup, FormControl, Form } from "react-bootstrap";
// import { BsSearch } from "react-icons/bs";

const Search = ({ onSubmit, onChange }) => {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            {/* <BsSearch /> */}
            Search
          </InputGroup.Text>
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
