import { Link } from 'react-router-dom'
import './Navbar.css'
import {useState} from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import {CgClose} from 'react-icons/cg'
const Navbar = () => {
  const [open , setOpen] = useState(false)
  return (
    <>
    <nav className='nav-container'>
      <i >
       <img className='esam-logo' alt="" srcSet="images/logo7.png" />
      </i>
      <i onClick={()=>setOpen(!open)}>{open?<CgClose className='menu-bar'/>:<AiOutlineBars className='menu-bar'/>}</i>
      {/* <div className="links-list show-links" > */}
      <div className={open?"links-list show-links":"links-list" }>
        <nav>
        <li onClick={()=>setOpen(false)}><a href="#about">About</a> </li>
        <li onClick={()=>setOpen(false)}><a href="#services">Serivces</a> </li>
        <li onClick={()=>setOpen(false)}><a href="#contact">Contact</a> </li>
        
        </nav>
        {/* <li>Sign Up</li> */}
      </div>
    </nav>
    </>
  )
}

export default Navbar