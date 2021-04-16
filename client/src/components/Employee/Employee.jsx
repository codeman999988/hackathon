import React from "react";
import profilepic from "../../assets/icons/default.png"
import chevron from "../../assets/icons/cheveron.png"
import './Employee.scss';
import empdata from '../../Data/employeeData.json';



class Employee extends React.Component {

  


  
  
  render() {
    
    const sand = empdata.map(obj => {
   
      return (
    <tr className="header">
            <div>
              <img></img>
              <td className="header__name">{obj.name}</td>
            </div>
              <td className="header__id">{obj.group}</td>
              <td className="header__role">{obj.shows}</td>
              <td className="header__avghours">{obj.avg}</td>
              
              <td className="header__hours">{obj.Hours}</td>
          </tr>
    
          )
  })

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
      <table className="table__scroll "style={{ width: "100%"}} >
        <tr>
          <div className="table__headers">
          <th>Name</th>
          
          <th>Role</th>
          <th>Average Hours Worked</th>
         
          <th>Hours</th>
          <th>Status</th>
          </div>
        </tr>

        {sand}
      </table>
      </section>
      </section>
    )
  }
}

export default Employee;


