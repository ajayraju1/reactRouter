import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-con">
    <ul className="nav-logo-txt-con">
      <li className="logo-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          className="nav-logo"
          alt="wave"
        />
        <p className="nav-link">Wave</p>
      </li>

      <li className="nav-txt-con">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
