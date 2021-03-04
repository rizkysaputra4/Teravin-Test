const { DB } = require("../../sql/connect-db");

function searchEmployee(req, res) {
  var searchKey = req.query.key;
  var orderBy = req.query.orderby || "name";
  var order = req.query.order || "asc";
  var limit = req.query.limit || 10;
  var offset = req.query.offset || 0;
  var query = `
    WITH cte AS (
    SELECT *
    FROM employee
    WHERE 
        name LIKE '%${searchKey}%' OR 
        email LIKE '%${searchKey}%' OR
        mobile LIKE '%${searchKey}%'
   )
    SELECT *
    FROM  (
        TABLE  cte
        ORDER BY ${orderBy} ${order}
        LIMIT ${limit} OFFSET ${offset}
    ) sub
    RIGHT  JOIN (SELECT count(*) FROM cte) c(full_count) ON true;`;

  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }

    return res.status(200).json(result.rows);
  });
}

function getEmployeeByID(req, res) {
  var employeeID = req.params.id;
  var query = `SELECT * FROM employee WHERE employee_id = '${employeeID}'`;

  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }
    return res
      .status(200)
      .json({ res: result.rows[0], count: result.rowCount });
  });
}

function postEmployee(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var address = req.body.address;
  var birthdate = req.body.birthdate;

  var query = `
            INSERT INTO employee( name, email, mobile, address, birthdate) 
                VALUES ($1, $2, $3, $4, $5)`;

  DB.query(query, [name, email, mobile, address, birthdate], (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }

    return res.status(200).json({ status: "OK" });
  });
}

function deleteEmployee(req, res) {
  var employeeID = req.params.id;
  var query = `DELETE FROM employee WHERE employee_id = '${employeeID}'`;

  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }
    return res.status(200).json({ status: "OK" });
  });
}

function editEmployee(req, res) {
  var employeeID = req.params.id;

  var name = req.body.name;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var address = req.body.address;
  var birthdate = req.body.birthdate;

  var query = `
        UPDATE employee SET 
            name = '${name}',
            email = '${email}',
            mobile = '${mobile}',
            address = '${address}',
            birthdate = '${birthdate}'
        WHERE employee_id = '${employeeID}'
        RETURNING *;`;

  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }

    return res.status(200).json(result.rows);
  });
}

module.exports = {
  searchEmployee,
  getEmployeeByID,
  postEmployee,
  editEmployee,
  deleteEmployee,
};
