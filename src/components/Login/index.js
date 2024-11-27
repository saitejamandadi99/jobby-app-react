import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showUsernameError: false,
    showPasswordError: false,
    showError: '',
    errorMsg: '',
    isLoading: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    this.setState({showError: false, isLoading: false})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isLoading: false, showError: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === '' && password === '') {
      this.setState({showUsernameError: true, showPasswordError: true})
    } else if (username === '') {
      this.setState({showUsernameError: true, showPasswordError: false})
    } else if (password === '') {
      this.setState({showUsernameError: false, showPasswordError: true})
    } else {
      this.setState({
        showUsernameError: false,
        showPasswordError: false,
        isLoading: true,
      })
      const url = 'https://apis.ccbp.in/login'
      const userdetails = {username, password}
      const options = {
        method: 'POST',
        body: JSON.stringify(userdetails),
      }

      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
      }
      this.setState({isLoading: false})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {
      showUsernameError,
      showPasswordError,
      showError,
      errorMsg,
      isLoading,
    } = this.state
    return (
      <div className="loginFormContainer">
        <form className="loginForm" onSubmit={this.submitForm}>
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
                onChange={this.onChangeUsername}
              />
              {showUsernameError && (
                <p className="errorMsg">*Please enter username</p>
              )}
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
                onChange={this.onChangePassword}
              />
              {showPasswordError && (
                <p className="errorMsg">*Please enter password</p>
              )}
            </div>
          </div>

          <button type="submit" className="LoginButton">
            {isLoading ? 'Logging in....' : 'Login'}
          </button>
          {showError && <p className="errorMsg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
