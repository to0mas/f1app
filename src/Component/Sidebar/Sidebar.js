import React, { use, useState } from 'react'
import './Sidebar.css'
import Logo from '../../images/logo2.png';
import Backg from '../../images/backg.jpg';
import { SidebarData } from './SidebarData';



export default function Sidebar() {
  const[isOpen, setIsOpen] = useState(false);
  const toggleSidebar = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className={`sidebar  ${isOpen ? 'open' : 'closed'}`}>
      <div className='header'>

      <button className='toggle' onClick={toggleSidebar}>
      <div className={`arrow ${isOpen ? 'left' : 'right' }  `}></div>
      </button>

     
        <div className='logo'>
            <img src={Logo}/>
        </div>
      </div>
      <nav className='nav-menu'>
        <ul>
          {SidebarData?.map((item,index) => (
              <li key={index}>
                <a href={ item.path}>
                  { item.icon}
                  {isOpen? item.title : ""}
                </a>
              </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
