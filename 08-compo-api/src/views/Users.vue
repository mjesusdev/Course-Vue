<template>
    <h2 class="text-info" v-if="isLoading">Wait please...</h2>
    <h2 class="text-success" v-else>Users</h2>
    <h5 class="text-danger" v-if="errorMessage">{{ errorMessage }}</h5>
    
    <div v-if="users.length > 0">
        <user-list 
            :users="users"
            v-slot="{ user }"
        >
            <h5 class="text-info mt-2">{{ user.first_name }} {{ user.last_name }}</h5>
            <span>{{ user.email }}</span>
        </user-list>
    </div>

    <div>
        <button class="btn btn-success m-1" @click="prevPage">Previous</button>
        <button class="btn btn-success m-1" @click="nextPage">Next</button>
    </div>
    <div>
        <span class="mt-2">Page: {{ currentPage }}</span>
    </div>
</template>

<script>
    import useUsers from '../composables/useUsers'
    import UserList from '../components/UserList.vue'

    export default {
        components: { UserList },
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