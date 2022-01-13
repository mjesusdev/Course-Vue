<template>
    <div>
        <h1>Lista de Tareas de Thanos</h1>
        <!-- <h4>Pending: {{ $store.state.todos.filter( t => !t.completed ).length }}</h4> -->
        <h4>Pending: {{ pending.length }}</h4>

        <hr>
        <button 
            :class="{ 'active': currentTab === 'all'}"
            @click="currentTab ='all'"
        >
            Todos
        </button>
        <button 
            :class="{ 'active': currentTab === 'pending'}"
            @click="currentTab ='pending'"
        >
            Pending
        </button>
        <button 
            :class="{ 'active': currentTab === 'completed'}"
            @click="currentTab ='completed'"
        >
            Completed
        </button>

        <div class="content">
            <ul>
                <li v-for="todo in getTodosByTab" :key="todo.id" 
                    :class="{ 'completed': todo.completed }"
                    @dblclick="toggleTodo( todo.id )">
                        {{ todo.text }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup() {
            const store = useStore()

            const currentTab = ref('all')

            return {
                currentTab,

                pending: computed(() => store.getters['pendingTodos'] ),
                all: computed(() => store.getters['allTodos'] ),
                completed: computed(() => store.getters['completedTodos'] ),

                getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value) ),

                // Methods 
                toggleTodo: ( id ) => store.commit('toggleTodo', id)
            }
        }
    }
</script>

<style scoped>
    .content {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul {
        width: 300px;
        text-align: left;
    }

    li {
        cursor: pointer;
    }

    .active {
        background-color: #2c3e50;
        color: white;
    }

    .completed {
        text-decoration: line-through;
    }
</style>