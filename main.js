import { registerSW } from 'virtual:pwa-register'

import './lib/index.ts'
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

const updateSW = registerSW({
  onNeedRefresh() {
    // show a prompt to user
    console.log('New content available, click on reload button to update.')

  },
  onOfflineReady() {
    console.log('show a ready to work offline to user')
    // show a ready to work offline to user
  }
})

updateSW()