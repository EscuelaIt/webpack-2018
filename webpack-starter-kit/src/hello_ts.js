/*
https://webpack.js.org/guides/typescript/
https://webpack.js.org/guides/typescript/#build-performance
https://www.npmjs.com/package/typings-for-css-modules-loader
https://stackoverflow.com/questions/41336858/how-to-import-css-modules-with-typescript-react-and-webpack
https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10
https://github.com/shepmaster/typescript-css-modules-theme
*/

import style from './style.css'
import sass from './scss/main.scss'
import data from './data.json'
import logo from './img/typescript-logo.svg'
import { HelloWorld } from './App.ts'

console.log('Hola mundo TypeScript con Webpack')

const d = document,
  app = d.getElementById('app'),
  h1 = d.createElement('h1'),
  p = d.createElement('p'),
  img = d.createElement('img'),
  nav = d.createElement('nav'),
  hi = new HelloWorld('TypeScript')

let menu = ''

data.links.forEach(link => menu += `<a href="${link[1]}">${link[0]}</a>`)

h1.textContent = 'Webpack + TypeScript'
p.textContent = hi.greet()
img.src = logo
nav.classList.add('Menu')
nav.innerHTML = menu

app.appendChild(h1)
app.appendChild(p)
app.appendChild(nav)
app.appendChild(img)

console.log(data)
