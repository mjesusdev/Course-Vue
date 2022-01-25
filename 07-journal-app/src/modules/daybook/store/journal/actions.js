/* export const myAction = async ({ commit }) => {

} */

import journalApi from "@/api/journalApi"

export const loadEntries = async({ commit }) => {
    
    const { data } = await journalApi.get('/entries.json')

    if ( !data ) {
        commit('setEntries', [])
        return
    } 

    const entries = []
    for ( let id of Object.keys(data) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}

export const updateEntry = async({ commit }, entry) => {
    // Extract all without ID
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    // await journalApi.put( PATH .json, dateToSave )
    const resp = await journalApi.put( `/entries/${ entry.id }.json`, dataToSave )
    console.log(resp);

    dataToSave.id = entry.id

    // Commit mutation -> updateEntry
    commit('updateEntry', { ...dataToSave })
}

export const createEntry = async({ commit }, entry) => {
    // dataToSave
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const { data } = await journalApi.post( `/entries.json`, dataToSave )
    dataToSave.id = data.name

    commit('addEntry', dataToSave)
    return data.name
}

export const deleteEntry = async({ commit }, id ) => {
    await journalApi.delete( `/entries/${ id }.json` )
    commit('deleteEntry', id)
    return id
}