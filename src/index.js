import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const globalState = {
  listCounter: [],
}

// Reducer
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        listCounter: [
          ...state.listCounter,
          {
            id: state.listCounter.length + 1,
          },
        ],
      }
    case 'MINUS_LIST':
      return {
        ...state,
        listCounter: state.listCounter.filter(
          (_, i) => i !== state.listCounter.length - 1
        ),
      }
    default:
      return state
  }
}

// Store
const storeRedux = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
