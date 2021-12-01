import { ref } from 'vue'

const useCounter = ( initValue = 5 ) => {
    const counter = ref( initValue )

    return {
        counter,

        decrease: () => counter.value--,
        increase: () => counter.value++,
    }
}

/* const increase = () => {
    counter.value++
}

const decrease = () => {
    counter.value--
} */

export default useCounter