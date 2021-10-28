<template>
    <div>
        <div class="d-flex justify-content-center">
            <h1 class="align-self-center">No hay nada más seleccionado</h1>
        </div>

        <Fab 
            @on:click="createNewEntry"
        />
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue'

    export default {
        components: {
            Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
        },
        methods: {
            createNewEntry() {
                this.$router.push({name: 'entry', params: { id: 'new' }})
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        height:  100%;
    }
</style>