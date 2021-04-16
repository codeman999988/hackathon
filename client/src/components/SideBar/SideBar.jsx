import React from 'react'
import './SideBar.scss'
import users from '../../assets/icons/Users.png'
import home from '../../assets/icons/House.png'
import setting from '../../assets/icons/CircleWavy.png'
import logo from '../../assets/icons/logo.png'
import rectangle from '../../assets/icons/Rectangle 279.png'


export default function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__logo"src={logo} alt="logo"></img>
      

      <div className="sidebar__menu"> 
      <img src={home} alt="home"></img>
      <h3 className="sidebar__link">Home</h3>
      </div>
      
      <div className="sidebar__menu">
      <img src={users} alt="user"></img>
      <h3 className="sidebar__link">Editors</h3>
      </div>
      
      <div className="sidebar__menu">
      <img src={setting} alt="settings"></img>
      <h3 className="sidebar__link">Settings</h3>
      </div>
      
    </div>
  )
}
