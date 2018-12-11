import React from 'react'
import { Switch , Route } from 'react-router-dom'
import About from './About'
import Landing from './Landing'
import Design from './Design'

const MainRouter = () => (
  
<Switch>
  <Route exact path='/' component={Landing} />
  <Route path='/about' component={About} />
  <Route path='/design' component={Design} />
</Switch>

)

export default MainRouter
