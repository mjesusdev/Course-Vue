<template>
    <h1>Pokemon: <span>#{{ id }}</span></h1>
</template>

<script>
    export default {
        
        props: {
            id: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                /* id: null */
            }
        },

        created() {
            
            /* const { id } = this.$route.param */

        }

    }
</script>