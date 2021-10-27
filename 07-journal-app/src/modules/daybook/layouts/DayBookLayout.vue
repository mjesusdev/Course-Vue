<template>
    <div>
        <NavBar />
        
        <div class="d-flex">
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
    import { mapActions } from 'vuex'

    export default {
        components: {
            NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
            EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
        },
        methods: {
            ...mapActions('journal', ['loadEntries'])
        },
        created() {
            this.loadEntries()
        }
    }
</script>