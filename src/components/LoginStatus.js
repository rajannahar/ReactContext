import React, {useContext} from 'react'
import { AuthContext } from '../AuthContext/AuthContext'

const LoginStatus = () => {

  const status = useContext(AuthContext)

  return(
    <>
      <h2>Login status: {status.isLoggedIn ? 'Logged in' : 'Logged out'}</h2>
    </>
  )
}

export default LoginStatus
