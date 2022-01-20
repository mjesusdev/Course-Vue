<template>
    <ul>
        <slot v-for="user in users" :user="user" :key="user.id"></slot>
    </ul>
</template>

<script>
    export default {
        props: {
            users: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>