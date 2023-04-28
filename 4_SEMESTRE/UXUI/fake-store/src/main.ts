import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import router from './router/Index';

createApp(App)
    .use(router)
    .mount('#app')
