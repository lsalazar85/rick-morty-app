import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Characters } from './pages/Characters'
import { Location } from './pages/Location'
import { Episodes } from './pages/Episodes'
import { NavBar } from './components/NavBar'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Router>
        <Home path='/' />
        <Characters path='/characters' />
        <Location path='/location' />
        <Episodes path='/episodes' />
      </Router>
    </Fragment>
  )
}

App.displayName = 'App'

export default App
