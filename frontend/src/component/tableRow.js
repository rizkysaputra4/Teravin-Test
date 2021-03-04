import React, { useState } from "react";
import DetailModal from "./detailModal";
import EditModal from "./editModal";
import DeleteModal from "./deleteModal";

export default function TableRow({ employee }) {
  return (
    <tr>
      <th scope="row">{employee.employee_id}</th>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.mobile}</td>
      <td>{action(employee)}</td>
    </tr>
  );
}

function action(employee) {
  return (
    <div className="row">
      <DetailModal employee={employee} />
      <EditModal employee={employee} />
      <DeleteModal />
    </div>
  );
}
