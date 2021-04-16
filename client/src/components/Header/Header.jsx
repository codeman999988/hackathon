import React from 'react'
import './Header.scss'
import chevron from '../../assets/icons/cheveron.png'
import profilepic from '../../assets/icons/default.png'

export default function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Overview</h1>
      <input className="header__search" type="text" placeholder="Search"></input>
      <select className="header__months">
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      </select>

      <select className="header__years">
      <option>2021</option>
      <option>2022</option>
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>
      <option>2026</option>
      </select>
      <img className="header__placeholder" src={profilepic} alt="profilepicture"></img>
      <img className="chevron"src={chevron} alt="chevron"></img>    
    </div>
  )
}



