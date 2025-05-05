import { CreateUI } from '@demo/ui'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import '@demo/ui/styles.css'

createApp(App)
  .use(CreateUI())
  .mount('#app')
