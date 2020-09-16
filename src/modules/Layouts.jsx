import React from 'react'
import { GlobalStyled } from './LayoutStyles'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomePage from '../pages/home/HomePage'
import AboutPage from '../pages/about/AboutPage'

class Layouts extends React.Component {
  render() {
    return (
      <GlobalStyled>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </GlobalStyled>
    )
  }
}

export default Layouts
