import React, { createContext } from 'react'

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
  }

  return (
    <AuthContext.Provider data-testid="authContext" value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}