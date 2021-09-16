<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es este pokémon?</h1>

        <PokemonPicture 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon"
        />

        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer"
        />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>
    </div>
</template>

<script>
    import PokemonOptions from '@/components/PokemonOptions'
    import PokemonPicture from '@/components/PokemonPicture'

    import getPokemonOptions from '@/helpers/getPokemonOptions'


    export default {
        components: { PokemonOptions, PokemonPicture  },
        data() {
            return {
                pokemonArr: [],
                pokemon: null,
                showPokemon: false,
                showAnswer: false
            }
        },
        methods: {
            async mixPokemonArray() {
                this.pokemonArr = await getPokemonOptions()

                const rndInt = Math.floor( Math.random() * 4 )
                this.pokemon = this.pokemonArr[ rndInt ]
            },
            checkAnswer( selectedId ) {
                this.showPokemon = true
                this.showAnswer  = true

                console.log(selectedId);
                console.log(this.pokemon.id);

                if ( selectedId === this.pokemon.id ) {
                    this.message = `¡Correcto! es ${ this.pokemon.name } 🎉`
                } else {
                    this.message = `¡Incorrecto! era ${ this.pokemon.name } ❌`
                }
            },
            newGame() {
                this.showPokemon = false
                this.showAnswer  = false
                this.pokemonArr  = []
                this.pokemon     = null
                this.mixPokemonArray()    
            }
        },
        mounted() {
            this.mixPokemonArray()
        }
    }
</script>