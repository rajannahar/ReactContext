import React, {useContext} from 'react'
import { AuthContext } from '../AuthContext/AuthContext'

const LoginButton = () => {

  const status = useContext(AuthContext)

  return(
    <button onClick={() => status.login()}>Login</button>
  )
}

export default LoginButton