import axios from 'axios';

const token = process.env.API_KEY_MAPBOX;

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiY3JhZnRpYW5vcyIsImEiOiJja3p4eWI3MHYwMDM0MnVueHFneWd3eXJnIn0.p4-9GCKM0WOyd1sME4sdOQ',
    }
});

export default searchApi;