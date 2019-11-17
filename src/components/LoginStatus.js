import React, {useContext} from 'react'
import { AuthContext } from '../AuthContext/AuthContext'

const LoginStatus = () => {
  const {isLoggedIn} = useContext(AuthContext)
  return(
    <>
      <h2 data-testid="loginStatus" >
        Login status: {isLoggedIn && isLoggedIn.toString() === "true" ? 'Logged in' : 'Logged out'}
      </h2>
    </>
  )
}

export default LoginStatus
