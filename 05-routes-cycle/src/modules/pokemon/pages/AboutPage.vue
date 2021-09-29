<template>
    <div>
        <h1>About Page</h1>
        <hr>
        <h2>{{ this.name }}</h2>
        <button 
            @click="onChangeName" 
            type="button" 
            class="btn btn-success mt-2"
        >
            Change name
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Jesus'
            }
        },

        methods: {
            onChangeName() {
                this.name = 'Pikachu ⚡';
                console.log('Se cambió el nombre a Pikachu');
            }
        }
    }
</script>