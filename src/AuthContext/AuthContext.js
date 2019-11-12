import React from 'react'

export const AuthContext = React.createContext(false);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;