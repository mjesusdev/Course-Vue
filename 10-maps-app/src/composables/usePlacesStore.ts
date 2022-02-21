import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '@/store/index';

export const usePlacesStore = () => {
    const store = useStore<StateInterface>();

    onMounted(() => {
        if ( !store.getters['places/isUserlocationReady'] ) {
            store.dispatch('places/getInitialLocation');
        }
    });

    return {

    }
}