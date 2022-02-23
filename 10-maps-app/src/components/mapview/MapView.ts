import { defineComponent, onMounted, ref, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';

import { usePlacesStore, useMapStore } from '@/composables';

export default defineComponent({
    name: "MapView",
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async() => {
            if ( !mapElement.value ) throw new Error("Map element is not defined");
            if ( !userLocation.value ) throw new Error("User location is not defined");

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/streets-v11',
                /* style: 'mapbox://styles/mapbox/dark-v10',*/
                center: userLocation.value,
                zoom: 15 // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4>Aquí estoy</h4>
                `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map );

            // TODO: Add marker for each place
            setMap( map ); 
        }

        onMounted(() => {
            if ( isUserlocationReady.value ) {
                return initMap();
            }
        });

        watch(isUserlocationReady, ( newValue ) => {
            if ( isUserlocationReady.value ) initMap();
        });

        return {
            userLocation,
            isUserlocationReady,
            mapElement
        }
    }
});