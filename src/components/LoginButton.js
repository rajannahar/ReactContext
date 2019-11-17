import React, {useContext} from 'react'
import { AuthContext } from '../AuthContext/AuthContext'

const LoginButton = () => {
  const { login } = useContext(AuthContext)
  return(
    <button data-testid="loginButton" onClick={ login }>Login</button>
  )
}

export default LoginButton