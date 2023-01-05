import { Link } from 'react-router-dom'
import './Navbar.css'
import {useState} from 'react'
import {AiOutlineBars} from 'react-icons/ai'
const Navbar = () => {
  const [open , setOpen] = useState(false)
  return (
    <>
    <nav className='nav-container'>
      <i >
       <img className='esam-logo' alt="" srcSet="images/logo7.png" />
      </i>
      <div className="links-list">
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
        {/* <li>Sign Up</li> */}
      </div>
      <h1><AiOutlineBars/></h1>
    </nav>
    </>
  )
}

export default Navbar