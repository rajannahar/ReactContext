import React, {useContext} from 'react'
import { AuthContext } from '../AuthContext/AuthContext'

const LoginStatus = () => {

  const status = useContext(AuthContext)
  const {isLoggedIn} = status

  return(
    <>
      <h2>Login status: {isLoggedIn.toString() === "true" ? 'Logged in' : 'Logged out'}</h2>
    </>
  )
}

export default LoginStatus
