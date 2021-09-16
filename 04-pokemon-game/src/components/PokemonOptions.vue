<template>
  <div class="options-container">
    <ul class="list-group">
      <li class="list-group-item list-group-item-primary mb-2" v-for="pokemon in pokemons" 
        :key="pokemon.id"
        @click="$emit( 'selection-pokemon', pokemon.id )">
          {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      pokemons: {
        type: Array,
        required: true,
      },
    }
  }
</script>

<style scoped>
  /* Pokemon Options */
  li {
      cursor: pointer;
      border-top-width: thin !important;
      width: 25em;
  }

  li:hover {
      background-color: rgba(0, 0, 0, 0.05);
  }

  .options-container {
      font-family: Arial, Helvetica, sans-serif !important;
      display: flex;
      justify-content: center;
  }
</style>