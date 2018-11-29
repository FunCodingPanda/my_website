import React from 'react'
import { Switch , Route } from 'react-router-dom'
import About from './About'
import Landing from './Landing'

const MainRouter = () => (
  
<Switch>
  <Route exact path='/' component={Landing} />
  <Route path='/about' component={About}/>
</Switch>

)

export default MainRouter
