import React, { ReactElement } from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Error from './Pages/Error'
import Opportunitty from './Pages/Opportunity'
import Spirit from './Pages/Spirit'

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/rovers/1/:name" component={Opportunitty} />
        <Route path="/rovers/2/:name" component={Spirit} />
        <Route path="/rovers/3/:name" component={Home} />
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </Router>
  )
}

export default App
