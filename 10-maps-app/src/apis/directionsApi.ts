import axios from 'axios';

const token = process.env.API_KEY_MAPBOX;

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiY3JhZnRpYW5vcyIsImEiOiJja3p4eWI3MHYwMDM0MnVueHFneWd3eXJnIn0.p4-9GCKM0WOyd1sME4sdOQ',
    }
});

export default directionsApi;