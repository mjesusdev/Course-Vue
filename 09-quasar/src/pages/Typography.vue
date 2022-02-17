<template>
  <q-page class="flex column q-pa-md">
      <span class="text-h1">Headline 1</span>
      <span class="text-h2">Headline 2</span>
      <span class="text-h3">Headline 3</span>
      
      <q-separator />

      <span class="text-subtitle1">Subtitle 1</span>
      <span class="text-subtitle2">Subtitle 2</span>

      <p class="text-body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error rerum dicta, fuga debitis rem a cupiditate, 
        quasi obcaecati sequi nulla quam nihil necessitatibus alias velit voluptas possimus asperiores adipisci est!
      </p>

      <q-btn 
        color="primary"
        :label="sideMenuOpen ? 'Close lateral menu' : 'Open lateral menu'"
        class="q-mt-md"
        @click="toggleSideMenu"
      />

      <span class="text-weight-bolder mt-2">Click this button to open the lateral menu 🚀🥳</span>
  </q-page>
</template>

<script>
    import { defineComponent } from 'vue'
    import useUI from '../composables/useUI'

    export default defineComponent({
        name: 'Typography',
        setup() {
          const { sideMenuOpen, toggleSideMenu } = useUI()

          return {
            sideMenuOpen,
            toggleSideMenu
          }
        }
    })
</script>