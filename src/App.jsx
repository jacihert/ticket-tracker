import "./App.scss";
import team from "./data/team.js";
import EmployeeCards from "./components/EmployeeCards/EmployeeCards"



const App= ()=>{
console.log(team)
 console.log(team[0])
 console.log([team.name])
 

// console.log(team.id)
//functions for names and roles

const employeeDetails=(team) => {team.map((employee) => {console.log(employee)} )

}
return(
    <>
    <div className="app">
<h2 className="Title">Ticket Tracker</h2>

</div>
</>
)

}

export default App;