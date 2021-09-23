import { shallowMount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage.vue'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })
    
    test('Should do match with Snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })
    
    test('Should call the function mixPokemonArray to mount', () => {
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        const wrapper = shallowMount( PokemonPage )
        expect( mixPokemonArraySpy ).toHaveBeenCalled();
    })

    test('Should do match with Snapshot when load the pokemons', () => {
        const wrapper = shallowMount( PokemonPage ,{ 
            data () {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Should show the components of PokemonPicture and PokemonOptions', () => {
        const wrapper = shallowMount( PokemonPage ,{ 
            data () {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        expect( picture.exists() ).toBeTruthy()
        expect( options.exists() ).toBeTruthy()

        expect( picture.attributes('pokemonid') ).toBe('5')
        expect( options.attributes('pokemons') ).toBeTruthy()
    })

})