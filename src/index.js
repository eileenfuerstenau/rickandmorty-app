import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App'
import reportWebVitals from './reportWebVitals'
import Header from '../src/components/Header'
import './styles/base.css'
import Grid from './components/Grid'

ReactDOM.render(
  <React.StrictMode>
    <Grid>
      <Header title="Rick and Morty" />
      <App />
    </Grid>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
