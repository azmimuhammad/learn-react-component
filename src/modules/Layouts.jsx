import React from 'react'
import { GlobalStyled } from './LayoutStyles'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomePage from '../pages/home/HomePage'
import AboutPage from '../pages/about/AboutPage'
import DetailPage from '../pages/home/DetailPage'

class Layouts extends React.Component {
  render() {
    return (
      <GlobalStyled>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/detail/:id" component={DetailPage} />
        </Switch>
      </GlobalStyled>
    )
  }
}

export default Layouts
