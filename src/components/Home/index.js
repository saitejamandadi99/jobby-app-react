import Cookie from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import Header from '../Header'

const Home = () => {
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Header />
}

export default Home
