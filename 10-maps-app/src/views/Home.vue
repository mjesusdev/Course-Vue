<template>
  <div>
    <MapView />

    <MyLocationBtn />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { usePlacesStore } from '../composables/usePlacesStore';

  import MapView from '../components/mapview/MapView.vue';
  import MyLocationBtn from '../components/my-location-btn/MyLocationBtn.vue';

  export default defineComponent({
    name: 'Home',
    components: { MapView, MyLocationBtn },
    setup() {
      usePlacesStore();
    }
  })
</script>
