import React from "react";
import profilepic from "../../assets/icons/default.png"
import chevron from "../../assets/icons/cheveron.png"
import './Employee.scss'

class Employee extends React.Component {
  render() {
    return (
      <section className="employee">

      <div className="employee2"> 
      <h1 className="employee__title2">Editors</h1>
      
      <input className="employee__search2" type="text" placeholder="Search"></input>
      
      <img className="employee__placeholder2" src={profilepic} alt="profilepicture"></img>
      <img className="chevron2"src={chevron} alt="chevron"></img>
      </div>

      <select className="dropdown">
      <option>Todo Por Mi Hija</option>
      <option>May</option>
      </select>

      <section className="employee__table">
      <table style={{ width: "100%" }} >
        <tr>
          <div className="table__headers">
          <th>Name</th>
          <th>Employee ID</th>
          <th>Role</th>
          <th>Average Hours Worked</th>
          <th>End Time</th>
          <th>Hours</th>
          <th>Status</th>
          </div>
        </tr>

        <tr className="header">
          <div>
            <img></img>
            <td className="header__name"></td>
          </div>
            <td className="header__id"></td>
            <td className="header__role"></td>
            <td className="header__avghours"></td>
            <td className="header__endTime"></td>
            <td className="header__hours"></td>
        </tr>
      </table>
      </section>
      </section>
    )
  }
}

export default Employee;


