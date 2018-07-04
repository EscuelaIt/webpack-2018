import style from './style.css'
import sass from './scss/main.scss'
import data from './data.json'
import logo from './img/js-logo.png'

const arr = [1, 2, 3],
  codeES6 = () => console.log(...arr),
  d = document,
  app = d.getElementById(app),
  img = d.createElement('img')

img.src = logo

d.body.appendChild(img)

codeES6()

console.log('Hola mundo sin configuración con Webpack y Babel')
console.log(data, data.name)
