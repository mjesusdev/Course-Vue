<template>
    <div>
        <h1>Pokemon: <span>#{{ id }}</span></h1>
        <div v-if="pokemon">
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name" >
        </div>
    </div>
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
            this.getPokemon()
        },

        methods: {
            async getPokemon() {
                try {
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then (response => response.json())
                    console.log(pokemon);
                    this.pokemon = pokemon
                } catch (error) {
                    this.$router.push('/')
                }
            }
        },
        watch: {
            id() {
                this.getPokemon()
                console.log(this.getPokemon());
            }
        }
    }
</script>