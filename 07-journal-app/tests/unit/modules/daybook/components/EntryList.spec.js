import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'

import journal from '@/modules/daybook/store/journal'
import EntryList from '@/modules/daybook/components/EntryList'
import { journalState } from '../../../mock-data/test-journal-state'

const createVuexStore = ( initialState ) => 
createStore({
    modules: {
        journal: {
            ...journal,
            state: { ...initialState }
        }

    }
})

describe('Tests in EntryList', () => {

    const store = createVuexStore( journalState )
    const mockRouter = {
        push: jest.fn()
    }

    let wrapper

    beforeEach(() => {
        jest.clearAllMocks()

        wrapper = shallowMount( EntryList , {
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })
    })

    test('should call getEntriesByTerm without term and show 3 entries', () => {
        expect( wrapper.findAll('entry-stub').length ).toBe(3)
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('should call getEntriesByTerm and filter entries', async() => {
        const input = wrapper.find('input')
        await input.setValue('DayBook')

        expect( wrapper.findAll('entry-stub').length ).toBe(1)
    })

    test('button should redirect to /new', () => {
        wrapper.find('button').trigger('click')

        expect( mockRouter.push )
            .toHaveBeenCalledWith({ name: 'entry', params: { id: 'new' } })
    })

})