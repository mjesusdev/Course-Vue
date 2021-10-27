/* export const myAction = async ({ commit }) => {

} */

import journalApi from "@/api/journalApi"

export const loadEntries = async({ commit }) => {
    
    const { data } = await journalApi.get('/entries.json')
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

    // Commit de una mutación
    commit('updateEntry', { ...entry })
}

export const createEntry = async() => {

}