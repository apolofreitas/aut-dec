import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { useAuth } from './hooks/auth'

import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'

function Routes() {
  const auth = useAuth()

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={({ location }) =>
            auth.user ? (
              auth.user.type === 'common' ? (
                <Redirect
                  to={{
                    pathname: '/home',
                    state: { from: location },
                  }}
                />
              ) : (
                <Redirect
                  to={{
                    pathname: '/admin',
                    state: { from: location },
                  }}
                />
              )
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/home"
          exact
          render={({ location }) =>
            auth.user ? (
              <Home />
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: location },
                }}
              />
            )
          }
        />
        <Route
          path="/admin"
          exact
          render={({ location }) =>
            auth.user && auth.user.type === 'admin' ? (
              <Admin />
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: location },
                }}
              />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
