import './assets/style/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { Router } from 'vue-router';

const app = createApp(App);
app.use(router);
app.mount("#app");