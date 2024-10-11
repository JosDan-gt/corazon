import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Asegúrate de que la ruta sea correcta

const app = createApp(App);
app.use(store);
app.mount('#app');
