import {withRouter, Link} from 'react-router-dom'

import Cookie from 'js-cookie'

import {IoMdHome} from 'react-icons/io'

import {BsBriefcase} from 'react-icons/bs'

import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const logoutUser = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="navBarContainer">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-Logo-home-page"
        />
      </Link>

      <div className="navbar_for_small">
        <Link to="/">
          <button type="button" className="iconButton">
            <IoMdHome className="icons" size="20" />
          </button>
        </Link>
        <Link to="/jobs">
          <button type="button" className="iconButton">
            <BsBriefcase className="icons" size="20" />
          </button>
        </Link>

        <button type="button" className="iconButton" onClick={logoutUser}>
          <FiLogOut className="icons" size="20" />
        </button>
      </div>

      <div className="navbar-for_medium">
        <ul className="listElementContainer">
          <Link to="/" className="liEle">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="liEle">
            <li>Jobs</li>
          </Link>
        </ul>
        <button type="button" className="logoutButton" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
