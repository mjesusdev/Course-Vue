import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

if ( !navigator.geolocation ) {
    alert('Geolocation is not supported by your browser 💔');
    throw new Error('Your navegator does not support GeoLocation 💔');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
