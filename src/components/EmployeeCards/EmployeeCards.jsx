import React from "react";
import "./EmployeeCards.scss";

// const EmployeeCards = ({ employeeDetails }) => {
const EmployeeCards = ({ employeeDetails }) => {
  //   console.log({ employeeDetails });
  // loop through each element & pass the name and role in p tag
  console.log(employeeDetails);
  const employeeCardsJSX = employeeDetails.map((employee) => (
    <p className="EmployeeCardsContainer">
      {employee.name} {employee.role}
      test {"test"}
    </p>
  ));

  console.log(employeeCardsJSX);
  return <div>{employeeCardsJSX}</div>;
};

export default EmployeeCards;
