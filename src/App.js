import React from 'react'
import Layouts from './modules/Layouts'
import { ThemeProvider } from 'styled-components'
import './App.css'

const theme = {}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layouts />
    </ThemeProvider>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}
