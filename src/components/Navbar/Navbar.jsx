import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
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
      {/* <div className="signInBtn">
        <li className='nav-sign-btn'>Sign In</li>
      </div> */}
    </nav>
    </>
  )
}

export default Navbar