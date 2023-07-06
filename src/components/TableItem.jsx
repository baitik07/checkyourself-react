import React from "react";
import Table from "react-bootstrap/Table";

const TableItem = ({ people }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Day of work</th>
          <th>Salary Per Day</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{people.name}</td>
          <td>{people.surname}</td>
          <td>{people.days}</td>
          <td>{people.salaryPerDay}</td>
          <td>{people.salaryPerDay * people.days}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableItem;
