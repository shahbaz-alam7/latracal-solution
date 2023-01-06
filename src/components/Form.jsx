import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { ADD_STUDENT } from "../redux/constant";
const Form = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [student, setStudent] = useState({
    name: "",
    rollno: "",
    checkin: new Date().toTimeString(),
    checkout: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name && student.rollno) {
      dispatch({ type: ADD_STUDENT, payload: student });
      setStudent({
        name: "",
        rollno: "",
        checkin: new Date().toTimeString(),
        checkout: "",
      });
    } else {
      handleShow();
    }
  };
  return (
    <div className="container">
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please enter student both the feilds...</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <form autoComplete="off">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter name...."
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="rollno"
              value={student.rollno}
              onChange={handleChange}
              placeholder="Enter Roll Number...."
              aria-label="Last name"
            />
          </div>{" "}
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
