import style from './style.css'
import sass from './scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { HelloWorld } from './App.jsx'
import data from './data.json'
import logo from './img/react-logo.svg'


ReactDOM.render(
  <HelloWorld name="React" logo={logo} menu={data.links} />,
  document.getElementById('app')
)
