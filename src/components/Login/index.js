import {Component} from 'react'

import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="loginFormContainer">
        <form className="loginForm">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="websiteLogo"
          />
          <div className="userDetailsInput">
            <div className="usernameInputContainer">
              <label htmlFor="usernameInput" className="labelElement">
                USERNAME
              </label>
              <input
                type="text"
                id="usernameInput"
                placeholder="Username"
                className="inputEle"
              />
            </div>

            <div className="userPasswordInputContainer">
              <label htmlFor="userPassword" className="labelElement">
                PASSWORD
              </label>
              <input
                type="password"
                id="userPassword"
                placeholder="Password"
                className="inputEle"
              />
            </div>
          </div>

          <button type="submit" className="LoginButton">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
