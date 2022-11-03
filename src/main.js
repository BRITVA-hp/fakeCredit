import { createApp } from 'vue'
import App from './App.vue'
import './assets/sass/style.sass'
import Maska from 'maska'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App)
// use as plugin
app.use(Maska);
app.use(Toast);

app.mount('#app')



