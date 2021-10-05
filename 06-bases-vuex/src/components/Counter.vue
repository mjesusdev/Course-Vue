<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>Direct Access: {{ $store.state.count }} </h2>
    <h2>Computed: {{ countComputed }}</h2>

    <h1>mapState</h1>
    <h2>mapState: {{ count }} </h2>
    <h2>LastMutation: {{ lastMutation }}</h2>
  </div>
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        computed: {
            countComputed() {
                return this.$store.state.count
            },
            ...mapState(['count', 'lastMutation'])
            /* ...mapState({
                count: state => state.count,
                lastMutation: state => state.lastMutation
            }) */
        }
    }
</script>

<style>

</style>