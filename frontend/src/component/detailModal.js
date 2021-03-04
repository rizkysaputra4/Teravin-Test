import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function DetailModal(employee) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={() => setModalShow(true)}
      >
        Detail
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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Employee Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-3">
            <div>
              <b>Employee ID</b>
            </div>
            <div>
              <b>Name</b>
            </div>
            <div>
              <b>Email</b>
            </div>
            <div>
              <b>Mobile</b>
            </div>
            <div>
              <b>Birthdate</b>
            </div>
            <div>
              <b>Address</b>
            </div>
          </div>
          <div className="col-md-auto">
            {Object.values(props.employee.employee)
              .slice(0, 6)
              .map((data) => {
                return <div>{data}</div>;
              })}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
