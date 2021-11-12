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

    // Mutations
    test('mutation: setEntries', () => {
        const store = createVuexStore({ isLoading: true, entries: [] })
        
        store.commit('journal/setEntries', journalState.entries)
        expect( store.state.journal.entries.length ).toBe(3)
        
        store.commit('journal/setEntries', journalState.entries)
        expect( store.state.journal.entries.length ).toBe(6)
        
        expect( store.state.journal.isLoading ).toBeFalsy()
    })
    
    test('mutation: updateEntry', () => {
        // 1. Create store
        const store = createVuexStore( journalState )

        // 2. UpdatedEntry
        const updatedEntry = {
            id: '-Mn5HXnHBBwU8rtrMPZ8',
            date : 1635414309496,
            text : 'Hello World from tests'
        }

        // 3. Commit mutation
        store.commit('journal/updateEntry', updatedEntry)

        // 4. Expects entries.length = 2
        const storeEntries = store.state.journal.entries
        expect( storeEntries.length ).toBe(3)

        // entries toEqual UpdatedEntry
        expect( storeEntries.find( e => e.id === updatedEntry.id ) ).toEqual( updatedEntry )
    })

    test('mutation: addEntry & deleteEntry', () => {
        // 1. Create store
        const store = createVuexStore( journalState )

        // 2. Create new entry
        const newEntry = {
            id: 'ABC-123',
            text: 'Hello World'
        }

        // 3. Commit mutation
        store.commit('journal/addEntry', newEntry)

        // 4. Expects entries.length = 4
        const storeEntries = store.state.journal.entries
        expect( storeEntries.length ).toBe(4)
        expect( storeEntries.find( e => e.id === newEntry.id ) ).toBeTruthy()

        // 5. Commit mutation
        store.commit('journal/deleteEntry', newEntry.id)
        expect( store.state.journal.entries.length ).toBe(3)
        expect( store.state.journal.entries.find( e => e.id === newEntry.id ) ).toBeFalsy()
    })

    test('getters: getEntriesByTerm & getEntryById', () => {
        const store = createVuexStore( journalState )

        const [ entry1, entry2 ] = journalState.entries

        expect( store.getters['journal/getEntriesByTerm']('').length ).toBe(3)
        expect( store.getters['journal/getEntriesByTerm']('ni modo 😅').length ).toBe(1)

        expect( store.getters['journal/getEntriesByTerm']('ni modo 😅') ).toEqual([ entry2 ])

        // getEntryById
        expect( store.getters['journal/getEntryById']('-Mn5HXnHBBwU8rtrMPZ8') ).toEqual( entry1 )
    })

    // Actions ----------------------
    test('actions: loadEntries', async() => {
        const store = createVuexStore({ isLoading: true, entries: [] })

        await store.dispatch('journal/loadEntries')
        
        expect( store.state.journal.entries.length ).toBe(3)
    })
    
    test('actions: updateEntry', async() => {
        const store = createVuexStore(journalState)
        
        const updatedEntry = {
            id: '-Mn5HXnHBBwU8rtrMPZ8',
            date : 1635414309496,
            text : 'Hello World from mock data',
            other: true
        }
        
        await store.dispatch('journal/updateEntry', updatedEntry)
        
        expect( store.state.journal.entries.length ).toBe(3)
        expect( store.state.journal.entries.find( e => e.id === updatedEntry.id ) ).toEqual( {
            id: '-Mn5HXnHBBwU8rtrMPZ8',
            date : 1635414309496,
            text : 'Hello World from mock data',
        })
    })
    
    test('actions: createEntry deleteEntry', async() => {
        const store = createVuexStore( journalState )
        
        const newEntry = { date: 1635414309496, text: 'New Entry from tests' }
        
        const id = await store.dispatch('journal/createEntry', newEntry )
        expect( typeof id ).toBe('string')
        
        // the new entry should exists in the state.journal.entries...
        expect( store.state.journal.entries.find( e => e.id === id ) ).toBeTruthy()
        
        // dispatch deleteEntry
        await store.dispatch('journal/deleteEntry')
        
        // the new entry should not exists in the state.journal.entries...
        expect( store.state.journal.entries.find( e => e.id === id ) ).toBeFalsy()
    })
})