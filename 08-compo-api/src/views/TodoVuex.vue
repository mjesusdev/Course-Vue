<template>
    <div>
        <h1>Lista de Tareas de Thanos</h1>
        <!-- <h4>Pendientes: {{ $store.state.todos.filter( t => !t.completed ).length }}</h4> -->
        <h4>Pendientes: {{ pending.length }}</h4>

        <hr>
        <h4>Todos: {{ all.length }}</h4>
        <h4>Completed: {{ completed.length }}</h4>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup() {
            const store = useStore()

            return {
                pending: computed(() => store.getters['pendingTodos'] ),
                all: computed(() => store.getters['allTodos'] ),
                completed: computed(() => store.getters['pendingTodos'] )
            }
        }
    }
</script>

<style>

</style>