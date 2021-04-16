import React from "react";

class Employee extends React.Component {
  render() {
    return (
      <section>
      <table style={{ width: "100%" }} >
        <tr>
          <th>Name</th>
          <th>Employee ID</th>
          <th>Role</th>
          <th>Average Hours Worked</th>
          <th>End Time</th>
          <th>Hours</th>
          <th>Status</th>
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
    )
  }
}

export default Employee;