import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import createSagaMiddleWare from "redux-saga"

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from "./reducers"
import getData from "./sagas"

const sagaMiddleWare = createSagaMiddleWare()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleWare)
)
sagaMiddleWare.run(getData)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
