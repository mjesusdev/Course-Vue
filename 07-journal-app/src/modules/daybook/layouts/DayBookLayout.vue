<template>
    <div>
        <NavBar />

        <div v-if="isLoading" class="row justify-content-md-center">
            <div class="col-3 alert-info text-center mt-5">
                Espere por favor...
                <h3 class="mt-2">
                    <i class="fa fa-spin fa-sync"></i>
                </h3>
            </div>
        </div>
        
        <div v-else class="d-flex">
            <div class="col-4">
                <EntryList />
            </div>
            <div class="col-4">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    import { mapActions, mapState } from 'vuex'

    export default {
        components: {
            NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
            EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
        },
        methods: {
            ...mapActions('journal', ['loadEntries'])
        },
        computed: {
            ...mapState('journal', ['isLoading'])
        },
        created() {
            this.loadEntries()
        }
    }
</script>