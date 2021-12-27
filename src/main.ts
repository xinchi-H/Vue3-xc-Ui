import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Xc from './components/xc.vue'
import Xc2 from './components/xc2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Xc},
    {path: '/xxx', component: Xc2}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
 