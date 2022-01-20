<template>
    <h2 v-if="isLoading">Wait please...</h2>
    <h2 v-else>Users</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>
    
    <div v-if="users.length > 0">
        <ul>
            <li v-for="{ first_name, last_name, email, id } in users" :key="id">
                <h4>{{ first_name }} - {{ last_name }}</h4>
                <h6>{{ email }}</h6>
            </li>
        </ul>
    </div>

    <button @click="prevPage">Previous</button>
    <button @click="nextPage">Next</button>
    <span>Page: {{ currentPage }}</span>
</template>

<script>
    import useUsers from '../composables/useUsers'

    export default {
        setup () {
            const { 
                currentPage,
                errorMessage,
                isLoading,
                nextPage,
                prevPage,
                users
            } = useUsers()

            return {
                isLoading, errorMessage, users, prevPage, nextPage, currentPage
            }
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul {
        width: 250px;
    }
</style>