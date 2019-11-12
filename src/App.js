import React from 'react';
import AuthContext from './AuthContext/AuthContext'

import LoginStatus from './components/LoginStatus'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

function App() {
  return (
    <div className="App">
      <h1>React Context</h1>
      <AuthContext>
        <LoginStatus />
        <LoginButton />
        <br />
        <LogoutButton />
      </AuthContext>
    </div>
  );
}

export default App;