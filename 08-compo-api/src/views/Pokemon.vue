<template>
    <div>
        <h1 v-if="!pokemon && !errorMessage">Search...</h1>
        <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
    
        <template v-else>
            <h3>{{ pokemon.name }}</h3>
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
            <br>
            <router-link :to="{ name: 'pokemon-search'}">Return to</router-link>
        </template>
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    import usePokemon from '../composables/usePokemon'

    export default {
        setup () {
            const route = useRoute()
            console.log(route.params.id)
            const { errorMessage, isLoading, pokemon } = usePokemon( route.params.id )

            return {
                errorMessage,
                isLoading,
                pokemon
            }
        }
    }
</script>