import { computed } from 'vue'
import { useStore } from 'vuex'

const useUI = () => {
    const store = useStore()
    /* const leftDrawerOpen = ref(false) */

    return {
        // Side Menu Options
        /* sideMenuOpen: computed(() => store.getters['ui/isSideMenuOpen']), */
        sideMenuOpen: computed({
            get() {
                return store.getters['ui/isSideMenuOpen']
            },
            set() {
                store.commit('ui/toggleSideMenu')
            }
        }),
        toggleSideMenu(){
            store.commit('ui/toggleSideMenu')
        },
        /* leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        } */
    }
}

export default useUI