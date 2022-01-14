<template>
    <div>
        <h1>Learning Slots</h1>
        <button>Open Modal</button>

        <modal title="Hello World">
            <template v-slot:header>
                <h2>Modal title</h2>
            </template>
            <template v-slot:body>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsam quis sit asperiores vel atque doloremque</p>
            </template>
            <template v-slot:footer>
                <button>Exit</button>
            </template>
        </modal>
    </div>
</template>

<script>
    import Modal from '../components/Modal.vue'

    export default {
        components: { Modal },
        setup() {

        }
    }
</script>

<style scoped>

</style>