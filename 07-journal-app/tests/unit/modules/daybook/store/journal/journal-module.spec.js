import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../../mock-data/test-journal-state'

const createVuexStore = ( initialState ) => 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }

        }
    })

describe('Vuex - Tests in Journal Module', () => {
    
    test('this is initial state, should have this store', () => {
        
        const store = createVuexStore(journalState)
        const { isLoading, entries } = store.state.journal

        expect( isLoading ).toBeFalsy()
        expect( entries ).toEqual( journalState.entries )

    })

})