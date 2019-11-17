import React, {useContext} from 'react'
import { AuthContext } from '../AuthContext/AuthContext'

const LogoutButton = () => {
  const { logout } = useContext(AuthContext)
  return(
    <button data-testid="logoutButton"  onClick={() => logout()}>Logout</button>
  )
}

export default LogoutButton;