import btn from './assets/css/btn.scss'
import font from './assets/font/font.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import {createApp} from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.use(ElementPlus).use(font).use(btn).mount('#app')
