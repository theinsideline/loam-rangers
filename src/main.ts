import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { svgSpritePlugin } from 'vue-svg-sprite'

const app = createApp(App)

app.use(PrimeVue)
app.use(svgSpritePlugin, {} /* options */)

app.mount('#loam_rangers')
