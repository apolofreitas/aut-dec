import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin" exact component={Admin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
