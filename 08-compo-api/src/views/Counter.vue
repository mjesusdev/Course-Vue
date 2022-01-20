<template>
    <div>
        <h1 class="text-success">Counter View</h1>
        <h2 class="">{{ counter }}</h2>
        <button class="btn btn-success m-1" @click="increase">+1</button>
        <button class="btn btn-success m-1" @click="decrease">-1</button>
    </div>
</template>

<script>
    import useCounter from '@/composables/useCounter'

    export default {
        name: 'Counter',
        props: {},
        emits: [],
        setup() {
            const { counter, increase, decrease } = useCounter(25)
            return {
                counter, increase, decrease
            }
        }
    }
</script>

<style>

</style>