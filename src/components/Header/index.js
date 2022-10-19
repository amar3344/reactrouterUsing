import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="container">
    <nav className="nav-container">
      <div className="bg-container">
        <ul className="header-container">
          <li className="wave-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
              className="wave-image"
            />
            <h1 className="nav-link">Wave</h1>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header
