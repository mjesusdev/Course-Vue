<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1 class="text-success">Reactive vs Ref</h1>
    <h3 class="mt-2">{{ ironman }}</h3>
    <h3 class="mt-2">{{ hulk }}</h3>

    <button class="btn btn-success m-1" @click="changeIronman">Change Ironman</button>
    <button class="btn btn-success m-1" @click="changeHulk">Change Hulk</button>

    <h3 class="mt-2">Ironman: {{ ironmanIsAlive }}</h3>
    <h3 class="mt-2">Hulk: {{ hulkIsAlive }}</h3>
    <button class="btn btn-success" @click="changeStatus">Change status</button>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
      name: 'Home',
      components: { },
      setup() {
          const ironman = ref({ name: 'Tony', age: 50 })
          const hulk    = reactive({ name: 'Bruce', age: 50 })

          const ironmanIsAlive = reactive(false)
          const hulkIsAlive    = ref(true)
          
          const changeStatus = () => {
              hulkIsAlive.value = !hulkIsAlive.value
          }

          return {
            ironman,
            hulk,

            ironmanIsAlive,
            hulkIsAlive,

            changeStatus,
            changeIronman: () => {
              ironman.value.name = 'Tony Stark'
              ironman.value.age  = 55 
            },
            changeHulk: () => {
              hulk.name = 'Bruce Banner'
              hulk.age  = 45
            }
          }
      }
    }
</script>
