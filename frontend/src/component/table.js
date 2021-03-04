import React, { useState } from "react";
import TableRow from "./tableRow";

export default function Table({ employeeState }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              ID <button className="btn-primary-outline">&uArr;</button>
              <button className="btn-primary-outline">&dArr;</button>
            </th>
            <th scope="col">
              Name <button className="btn-primary-outline">&uArr;</button>
              <button className="btn-primary-outline">&dArr;</button>
            </th>
            <th scope="col">
              Email <button className="btn-primary-outline">&uArr;</button>
              <button className="btn-primary-outline">&dArr;</button>
            </th>
            <th scope="col">
              Mobile <button className="btn-primary-outline">&uArr;</button>
              <button className="btn-primary-outline">&dArr;</button>
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeState.map((data) => {
            return <TableRow employee={data} key={data.employee_id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
