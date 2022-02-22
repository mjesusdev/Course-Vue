import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


import mapboxgl from 'mapbox-gl';
/* const mapboxToken = process.env.API_KEY_MAPBOX; */
mapboxgl.accessToken = 'pk.eyJ1IjoiY3JhZnRpYW5vcyIsImEiOiJja3p4eWI3MHYwMDM0MnVueHFneWd3eXJnIn0.p4-9GCKM0WOyd1sME4sdOQ';

if ( !navigator.geolocation ) {
    alert('Geolocation is not supported by your browser 💔');
    throw new Error('Your navegator does not support GeoLocation 💔');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
