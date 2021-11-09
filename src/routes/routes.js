import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import {
  Search,
  Profile
} from '../pages'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/busca"
        component={Search}
      />
      <Route
        path="/perfil/:id"
        component={Profile}
      />
    </Switch>
  </BrowserRouter>
)
