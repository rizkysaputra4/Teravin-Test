import React, { useState, useEffect } from "react";
import Table from "./component/table";
import SearchColumn from "./component/searchColumn";
import Pagination from "./component/pagination";
import axios from "axios";

const server = "http://localhost:5000/";

interface employee {
  employee_id: string;
  email: string;
  mobile: string;
  name: string;
  address: string;
  birthdate: string;
}

export default function MainPage() {
  const [employee, setEmployee] = useState<string>("Gabriel Rufino");

  useEffect(() => {
    axios
      .get<employee[]>(`${server}search?key=`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="d-flex col justify-content-between">
          <h3 className="">List Employee</h3>
        </div>

        <div className="d-flex col justify-content-between">
          <div className="">
            <SearchColumn />
          </div>
          <div className="">
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-3" style={{ height: "80vh" }}>
        <Table />
      </div>
      <div className="d-flex col justify-content-center">
        <Pagination />
      </div>
    </div>
  );
}
