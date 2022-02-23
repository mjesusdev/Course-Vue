import { MutationTree } from 'vuex';
import { MapState } from './state';
import Mapboxgl from 'mapbox-gl';

const mutation: MutationTree<MapState> = {
    setMap( state, map: Mapboxgl.Map ) {
        state.map = map;
    }
}

export default mutation;