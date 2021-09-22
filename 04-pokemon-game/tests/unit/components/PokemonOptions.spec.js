import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions.vue'

import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })

    test('should do match with Snapshot', () => {
        expect(wrapper.html() ).toMatchSnapshot()
    })

})