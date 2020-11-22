import React from 'react'

import { AuthProvider } from './hooks/auth'

import Routes from './routes'

import './styles/custom-bootstrap/bootstrap.scss'
import './styles/global.scss'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
