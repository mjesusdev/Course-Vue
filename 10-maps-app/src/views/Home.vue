<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { usePlacesStore } from '../composables/usePlacesStore';

  export default defineComponent({
    name: 'Home',
    components: {},
    setup() {
      usePlacesStore();
    }
  })
</script>
