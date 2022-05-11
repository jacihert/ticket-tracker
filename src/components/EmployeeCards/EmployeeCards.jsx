import React from "react";
import TicketCounter from "../TicketCounter/TicketCounter";
import "./EmployeeCards.scss";

// const EmployeeCards = ({ employeeDetails }) => {
const EmployeeCards = ({ employeeDetails }) => {
  //   console.log({ employeeDetails });
  // loop through each element & pass the name and role in p tag
  console.log(employeeDetails);
  const employeeCardsJSX = employeeDetails.map(employee => (
    <div className="EmployeeCard">
      <p>
        {"Name: "} {employee.name}
      </p>
      <p>
        {"Role: "}
        {employee.role}
      </p>
      <TicketCounter />
    </div>
  ));

  console.log(employeeCardsJSX);
  return <div className="EmployeeCardsContainer">{employeeCardsJSX}</div>;
};

export default EmployeeCards;
