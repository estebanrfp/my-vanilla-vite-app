import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate'
      // manifest: {
      //   // content of manifest
      // },
      // workbox: {
      //   // workbox options for generateSW
      //   swDest: './dist/sw.js',
      //   globDirectory: './dist',
      //   skipWaiting: true
      // }
    })
  ]
}