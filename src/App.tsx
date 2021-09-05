import React, { ReactElement } from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/rovers/:name/:pag" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
