import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHECK_OUT } from "../redux/constant";
const StudentTable = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentsReducer);
  let studentsData = students.students;
  const totalStudent = students.totalStudent;

  const handleCheckout = (i) => {
    dispatch({ type: CHECK_OUT, payload: i });
  };

  // Student available right now in the school
  const availableStudent = studentsData.reduce(
    (availableStudents, currentValue) => {
      if (currentValue?.checkout === "")
        availableStudents = availableStudents + 1;
      return availableStudents;
    },
    0
  );

  // Sort data according to roll no....
  studentsData = studentsData.sort((a, b) => {
    return a.rollno - b.rollno;
  });
  return (
    <div className="container my-4">
      <h3 className="m-4">
        Number of Student present today:
        <small className="text-muted"> {totalStudent}</small>
      </h3>
      <h4 className="m-4">
        Number of Student available now in school:
        <small className="text-muted"> {availableStudent}</small>
      </h4>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th className="mobile" scope="col">
              S.no
            </th>
            <th scope="col">Name</th>
            <th className="mobile" scope="col">
              Roll No.
            </th>
            <th scope="col">Checkin</th>
            <th scope="col">Checkout</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((item, i) => {
            return (
              <tr scope="row" key={i}>
                <td className="mobile">{i + 1}</td>
                <td>{item?.name}</td>
                <td className="mobile">{item?.rollno}</td>
                <td>{item?.checkin?.slice(0, 8)}</td>
                <td>
                  {item?.checkout === "" ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleCheckout(i)}
                    >
                      Checkout
                    </button>
                  ) : (
                    <span className="btn">{item?.checkout?.slice(0, 8)}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
