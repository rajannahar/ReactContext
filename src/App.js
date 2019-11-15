import React from 'react';
import { AuthProvider } from './AuthContext/AuthContext'

import LoginStatus from './components/LoginStatus'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

function App() {
  return (
    <div className="App">
      <h1>React Context</h1>
      <AuthProvider>
        <LoginStatus />
        <LoginButton />
        <br />
        <LogoutButton />
      </AuthProvider>
    </div>
  );
}

export default App;