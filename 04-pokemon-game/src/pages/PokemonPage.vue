<template>
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <h1 class="text-dark" v-if="!pokemon">Espere por favor...</h1>

            <div v-else>
                <img class="img-fluid" src="https://fontmeme.com/permalink/210916/cc36adbabb6cad4fddc1353029834b25.png" alt="" srcset="">
                <h1 class="text-info mt-4">¿Quién es este pokémon?</h1>

                <PokemonPicture 
                    :pokemonId="pokemon.id" 
                    :showPokemon="showPokemon"
                />

                <PokemonOptions 
                    :pokemons="pokemonArr"
                    @selection-pokemon="checkAnswer"
                />

                <template v-if="showAnswer">
                    <h2 class="fade-in mt-4 mb-4" :class="type">{{ message }}</h2>
                    <button class="btn btn-success" @click="newGame">
                        Nuevo Juego
                    </button>
                </template>
            </div>
        </div>
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
                    this.type = 'text-success'
                } else {
                    this.message = `¡Incorrecto! era ${ this.pokemon.name } 😅`
                    this.type = 'text-danger'
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