import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        // todo: put loading
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            ( err ) => {
                console.error(err);
                throw new Error('No geolocation 💔');
            }
        )
    },

    async searchPlacesByTerm({ commit, state }, query: string) {
        console.log('Vuex: ', query);
    }
}

export default actions;