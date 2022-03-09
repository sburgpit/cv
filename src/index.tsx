import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Icons from './components/elements/icons'
import Cursor from './components/elements/Cursor'
import './assets/scss/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if (!document.getElementById('svg-icons')) {
  const container = document.createElement('div')
  container.id = 'svg-icons'
  document.querySelector('body')?.appendChild(container)

  ReactDOM.render(<Icons />, container)
}

if (!document.getElementById('cursor')) {
  const container = document.createElement('div')
  container.id = 'cursor'
  document.querySelector('body')?.appendChild(container)

  ReactDOM.render(<Cursor />, container)
}