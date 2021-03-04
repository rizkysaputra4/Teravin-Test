import React from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";

const server = "http://localhost:5000/";
export default function EditModal(employee) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => setModalShow(true)}
      >
        Edit
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        employee={employee}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  let employee = props.employee.employee;
  const [name, setName] = React.useState(employee.name);
  const [email, setEmail] = React.useState(employee.email);
  const [mobile, setMobile] = React.useState(employee.mobile);
  const [birthdate, setBirthdate] = React.useState(new Date());
  const [address, setAddress] = React.useState(employee.address);

  var data = {
    employee_id: employee.employee_id,
    name: name,
    email: email,
    mobile: mobile,
    birthdate: birthdate.toISOString().split("T")[0],
    address: address,
  };

  const submitData = (e) => {
    e.preventDefault();
    axios
      .put(`${server}employee/${employee.employee_id}`, data)
      .then((res) => {
        notify("success");
        props.onHide();
      })
      .catch((err) => notify(err));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div classNameName="row">
          <Form>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Employee ID
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  defaultValue={employee.employee_id}
                  disabled
                />
              </Col>
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  defaultValue={employee.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  defaultValue={employee.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Form.Label column sm="2">
                Mobile
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  defaultValue={employee.mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Col>
              <Form.Label column sm="2">
                Birthdate
              </Form.Label>
              <Col sm="10">
                <DatePicker
                  selected={birthdate}
                  onChange={(date) => setBirthdate(date)}
                />
              </Col>
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  defaultValue={employee.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-primary btn-large centerButton"
          type="submit"
          onClick={submitData}
        >
          Send
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const notify = (alert) => {
  const options = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  toast.success(`${alert}`, options);
};
