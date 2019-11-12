import React, {useContext} from 'react'
import { AuthContext } from '../AuthContext/AuthContext'

const LogoutButton = () => {

  const status = useContext(AuthContext)

  return(
    <button onClick={() => status.logout()}>Logout</button>
  )
}

export default LogoutButton;