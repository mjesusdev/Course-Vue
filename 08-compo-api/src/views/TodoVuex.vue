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

        <button @click="isOpen=true">Create Todo</button>

        <!-- Modal -->
        <modal v-if="isOpen" @on:close="isOpen = false">
            <template v-slot:header>
                <h1>New todo</h1>
            </template>

            <template v-slot:body>
                <form @submit.prevent="createTodo(newTodoText); isOpen=false">
                    <input type="text" placeholder="New todo" v-model="newTodoText">
                    <br>
                    <br>
                    <button type="submit">Create</button>
                </form>
            </template>
        </modal>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import Modal from '../components/Modal.vue'
    import useTodos from '../composables/useTodos'

    export default {
        components: { Modal },
        setup() {
            const { currentTab, getTodosByTab, pending, toggleTodo, createTodo } = useTodos()

            return {
                currentTab,
                getTodosByTab,
                pending, 
                toggleTodo,
                createTodo,

                isOpen: ref(false),
                newTodoText: ref('')
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