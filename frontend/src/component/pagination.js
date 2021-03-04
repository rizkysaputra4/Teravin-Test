import React, { useState } from "react";

export default function Pagination() {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center">
        <div className="px-2 py-auto">Show</div>
        <select
          className="custom-select custom-select-sm"
          style={{ width: "60px" }}
        >
          <option value="1">5</option>
          <option value="2">10</option>
          <option value="3">15</option>
        </select>
        <div style={{ width: "80px" }}>per page</div>
      </div>
      <nav aria-label="Page navigation example" className="">
        <ul className="pagination mt-0">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
