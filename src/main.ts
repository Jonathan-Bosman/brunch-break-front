import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

createApp(App).use(store).use(router).use(VCalendar, {}).mount('#app')
