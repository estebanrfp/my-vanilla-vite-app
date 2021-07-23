import html from './template.js'
// import alerts from '../Alerts'

import './styles.css'

async function App () {
  document.querySelector('#app').innerHTML = html

  const alerts = await import('../Alerts').then(module => module.default)
  alerts('', 'Hello World !!!', 'testing ... :-)', 'warning', false, true)
  // console.log(Temporal.now)

  const body = document.querySelector('body')
  const menu = document.querySelector('.menu-icon')
  // const menuItems = document.querySelectorAll('.nav__list-item')

  const toggleClass = (element, stringClass) => {
    element.classList.contains(stringClass) ? element.classList.remove(stringClass) : element.classList.add(stringClass)
  }

  menu.addEventListener('click', () => toggleClass(body, 'nav-active'))

  // const val = document.getElementById('#val')?.value ?? 100
  // const keys = window.localStorage.getItem('keys') // ?.()// || null
}

export default App
