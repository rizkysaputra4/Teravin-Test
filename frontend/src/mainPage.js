import React, { useState, useEffect } from "react";
import Table from "./component/table";
import SearchColumn from "./component/searchColumn";
import Pagination from "./component/pagination";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const server = "http://localhost:5000/";

export default function MainPage() {
  const [employee, setEmployee] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [limit, setLimit] = useState("");
  const [offset, setOffset] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("");

  var searchComponent = {
    keyword: keyword,
    limit: limit,
    offset: offset,
    orderBy: orderBy,
    order: order,
  };

  useEffect(() => {
    axios
      .get(`${server}search?key=&orderby=employee_id`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(keyword);
  }, []);

  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="row mt-2">
        <div className="d-flex col justify-content-between">
          <h3 className="">List Employee</h3>
        </div>

        <div className="d-flex col justify-content-between">
          <div className="">
            <SearchColumn
              searchComponent={searchComponent}
              setKeyword={(key) => {
                setKeyword(key);
              }}
              setEmployee={(data) => setEmployee(data)}
            />
          </div>
          <div className="">
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-3" style={{ minHeight: "80vh" }}>
        <Table
          employeeState={employee}
          searchComponent={searchComponent}
          setOrderBy={(key) => {
            setOrderBy(key);
          }}
          setOrder={(key) => {
            setOrder(key);
          }}
          setEmployee={(data) => setEmployee(data)}
        />
      </div>
      <div className="d-flex col justify-content-center">
        <Pagination
          searchComponent={searchComponent}
          setLimit={(key) => {
            setLimit(key);
          }}
          setOffset={(key) => {
            setOffset(key);
          }}
          setEmployee={(data) => setEmployee(data)}
        />
      </div>
    </div>
  );
}
