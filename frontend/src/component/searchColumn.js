import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const server = "http://localhost:5000/";
export default function SearchColumn(props) {
  var keyword = props.searchComponent.keyword;

  const search = (e) => {
    e.preventDefault();
    console.log(`${server}search?key=${props}`);
    axios
      .get(`${server}search?key=${keyword}`)
      .then((res) => {
        console.log(res.data);
        props.setKeyword("");
        props.setEmployee(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="form-inline">
        <div className="form-group  mb-2">
          <label className="sr-only"></label>
          <Form.Control
            type="text"
            value={keyword}
            onChange={(e) => props.setKeyword(e.target.value)}
            placeholder="Search by Name, Email, or Address"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2" onClick={search}>
          Search
        </button>
      </form>
    </div>
  );
}
