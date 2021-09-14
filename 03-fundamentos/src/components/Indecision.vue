<template>
  <div>
    <img v-if="img" :src="img" alt="bg">
    <div class="bg-dark"></div>

    <div class="indecision-container">
      <input 
        type="text" 
        v-model="question"
        placeholder="Hazme una pregunta"
      >
      <p>Recuerda terminar con un signo de interrogación (?)</p>

      <div v-if="isValidQuestion">
        <h2>{{ question }}</h2>
        <h1>{{ answer }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        question: null,
        answer: null,
        img: null,
        isValidQuestion: false
      }
    },
    methods: {
      async getAnswer() {
        this.answer = 'Pensando...'
        const { answer, image } = await fetch('https://yesno.wtf/api').then(res => res.json() )
      
        this.answer = answer === 'yes' ? 'Sí!' : 'No!'
        this.img = image
      }
    },
    watch: {
      question( value ) {

        this.isValidQuestion = false

        console.log({ value });

        if ( !value.includes('?') ) return

        this.isValidQuestion = true

        // TODO: Realizar la petición a la API
        this.getAnswer()
      }
    }
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 2%;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>