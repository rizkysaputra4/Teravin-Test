var express = require("express");
var app = express();
const {
  searchEmployee,
  getEmployeeByID,
  postEmployee,
  deleteEmployee,
  editEmployee,
} = require("./handler/crud");

app.get("/search", searchEmployee);
app.get("/employee/:id", getEmployeeByID);
app.post("/employee", postEmployee);
app.delete("/employee/:id", deleteEmployee);
app.put("/employee/:id", editEmployee);

module.exports = app;
