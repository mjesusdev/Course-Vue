import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'

import Swal from 'sweetalert2'

import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../mock-data/test-journal-state'

import EntryView from '@/modules/daybook/views/EntryView'

const createVuexStore = ( initialState ) => 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn()
}))

describe('Tests in EntryView', () => {
    
    const store = createVuexStore( journalState )
    store.dispatch = jest.fn()

    const mockRouter = {
        push: jest.fn()
    }
 
    let wrapper

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallowMount( EntryView , {
            props: {
                id: '-Mn5HXnHBBwU8rtrMPZ8'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })
    })

    test('should exit user when ID not exists', () => {
        const wrapper = shallowMount( EntryView , {
            props: {
                id: 'ID not exists in store'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })
        
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry' })
    })

    test('should show entries', () => {
        expect(wrapper.html()).toMatchSnapshot()
        expect( mockRouter.push ).not.toHaveBeenCalled()
    })

    test('should delete entries and exit', (done) => {
        Swal.fire.mockReturnValueOnce( Promise.resolve({ isConfirmed: true }) )
        wrapper.find('.btn-danger').trigger('click')

        expect( Swal.fire ).toHaveBeenCalledWith({     
            title: '¿Are you sure?',
            text: 'If you delete this, not recovery',
            showDenyButton: true,
            confirmButtonText: "Yes, I'm sure"
        })

        setTimeout( () => {
            expect( store.dispatch ).toHaveBeenCalledWith('journal/deleteEntry', '-Mn5HXnHBBwU8rtrMPZ8')
            expect( mockRouter.push ).toHaveBeenCalled()
            done()
        }, 1)

    })

})