<template>
    <div>
        <h1>Learning Slots</h1>
        <button @click="openModal">Open Modal</button>

        <modal v-if="isOpen" title="Hello World" @on:close="closeModal">
            <template v-slot:header>
                <h2>Modal title</h2>
            </template>
            <template v-slot:body>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsam quis sit asperiores vel atque doloremque</p>
            </template>
            <template v-slot:footer>
                <button @click="closeModal">Exit</button>
            </template>

            <template v-slot:exposed="{ newTitle }">
                <h2>{{ newTitle }}</h2>
            </template>
        </modal>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import Modal from '../components/Modal.vue'

    export default {
        components: { Modal },
        setup() {

            const isOpen = ref(false)

            return {
                isOpen,
                openModal: () => isOpen.value = true,
                closeModal: () => isOpen.value = false
            }
        }
    }
</script>

<style scoped>

</style>