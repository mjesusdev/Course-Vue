<template>
  <div>
      <h1>¿Quién es este pokémon?</h1>

      <PokemonPicture :pokemonId="4" :showPokemon="false"/>

      <PokemonOptions />

  </div>
</template>

<script>
    import PokemonOptions from '@/components/PokemonOptions'
    import PokemonPicture from '@/components/PokemonPicture'

    import getPokemonOptions from '@/helpers/getPokemonOptions'

    console.log( getPokemonOptions() );

    export default {
        components: { PokemonPicture, PokemonOptions },
    }
</script>