import { createApp } from 'vue'
import App from './App.vue'
import './assets/sass/style.sass'
import Maska from 'maska'

const app = createApp(App)
// use as plugin
app.use(Maska);

app.mount('#app')



